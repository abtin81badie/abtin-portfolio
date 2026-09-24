import { useCallback, useEffect, useState } from "react";
import type { GitHubContentRepository } from "../../services/content/GitHubContentRepository";
import { GitHubError } from "../../services/github/GitHubClient";
import { createGitHubClient, createRepository, tokenStore } from "./services";

export type AdminSession =
  | { status: "signed-out"; error?: string }
  | { status: "checking" }
  | { status: "online"; login: string; repository: GitHubContentRepository }
  | { status: "offline" };

const describe = (error: unknown): string => {
  if (error instanceof GitHubError) {
    if (error.isUnauthorized) return "GitHub rejected this token. Check that it is valid and not expired.";
    if (error.status === 404) return "Repository not found — does this token have access to it?";
    return `GitHub error: ${error.message}`;
  }
  return error instanceof Error ? error.message : "Something went wrong.";
};

/** Handles signing in with a GitHub token and exposes the resulting backend. */
export function useAdminSession() {
  const [session, setSession] = useState<AdminSession>(() =>
    tokenStore.get() ? { status: "checking" } : { status: "signed-out" },
  );

  const connect = useCallback(async (token: string, remember?: boolean) => {
    setSession({ status: "checking" });
    try {
      const client = createGitHubClient(token);
      const { login, canPush } = await client.verifyAccess();
      if (!canPush) throw new Error(`@${login} does not have write access to the repository.`);
      if (remember !== undefined) tokenStore.set(token, remember);
      setSession({ status: "online", login, repository: createRepository(client) });
    } catch (error) {
      tokenStore.clear();
      setSession({ status: "signed-out", error: describe(error) });
    }
  }, []);

  useEffect(() => {
    const saved = tokenStore.get();
    if (saved) void connect(saved);
  }, [connect]);

  const signIn = useCallback((token: string, remember: boolean) => connect(token.trim(), remember), [connect]);

  const signOut = useCallback(() => {
    tokenStore.clear();
    setSession({ status: "signed-out" });
  }, []);

  const workOffline = useCallback(() => setSession({ status: "offline" }), []);

  return { session, signIn, signOut, workOffline };
}
