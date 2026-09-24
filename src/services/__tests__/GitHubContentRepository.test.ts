import { describe, expect, it, vi } from "vitest";
import rawContent from "../../content/content.json";
import type { PortfolioContent } from "../../domain/content";
import { ContentConflictError, GitHubContentRepository } from "../content/GitHubContentRepository";
import { decodeText, encodeText } from "../github/base64";
import { GitHubError, type GitHubClient } from "../github/GitHubClient";

const content = rawContent as unknown as PortfolioContent;

function fakeClient(overrides: Partial<Record<"getFile" | "putFile", ReturnType<typeof vi.fn>>> = {}) {
  const client = {
    getFile: vi.fn(async () => ({ sha: "sha-1", contentBase64: encodeText(JSON.stringify(content)) })),
    putFile: vi.fn(async () => ({ sha: "sha-2", commitUrl: "https://github.com/commit/2" })),
    ...overrides,
  };
  return client;
}

const repo = (client: ReturnType<typeof fakeClient>) =>
  new GitHubContentRepository({
    client: client as unknown as GitHubClient,
    contentPath: "src/content/content.json",
    publicDir: "public",
    fallback: content,
  });

describe("GitHubContentRepository", () => {
  it("loads and normalizes the remote JSON", async () => {
    const loaded = await repo(fakeClient()).load();
    expect(loaded).toEqual(content);
  });

  it("publishes pretty JSON with the SHA it loaded", async () => {
    const client = fakeClient();
    const repository = repo(client);
    await repository.load();
    const result = await repository.publish(content, "msg");

    expect(result.commitUrl).toBe("https://github.com/commit/2");
    const args = client.putFile.mock.calls[0][0] as { sha: string; contentBase64: string; message: string };
    expect(args.sha).toBe("sha-1");
    expect(args.message).toBe("msg");
    expect(decodeText(args.contentBase64)).toBe(`${JSON.stringify(content, null, 2)}\n`);
  });

  it("tracks the new SHA after publishing", async () => {
    const client = fakeClient();
    const repository = repo(client);
    await repository.load();
    await repository.publish(content, "one");
    await repository.publish(content, "two");
    expect((client.putFile.mock.calls[1][0] as { sha: string }).sha).toBe("sha-2");
  });

  it("reports a conflict when GitHub rejects a stale SHA", async () => {
    const client = fakeClient({
      putFile: vi.fn(async () => {
        throw new GitHubError(409, "does not match");
      }),
    });
    const repository = repo(client);
    await repository.load();
    await expect(repository.publish(content, "msg")).rejects.toBeInstanceOf(ContentConflictError);
  });

  it("re-reads the latest SHA when forcing an overwrite", async () => {
    const client = fakeClient();
    const repository = repo(client);
    await repository.load();
    client.getFile.mockResolvedValueOnce({ sha: "sha-remote", contentBase64: "" });
    await repository.publish(content, "msg", { force: true });
    expect((client.putFile.mock.calls[0][0] as { sha: string }).sha).toBe("sha-remote");
  });

  it("uploads assets into the public folder, replacing existing files", async () => {
    const client = fakeClient();
    await repo(client).upload("profile.jpg", new Blob([new Uint8Array([1, 2, 3])]), "upload");
    const args = client.putFile.mock.calls[0][0] as { path: string; sha: string; contentBase64: string };
    expect(args.path).toBe("public/profile.jpg");
    expect(args.sha).toBe("sha-1");
    expect(args.contentBase64).toBe("AQID");
  });
});
