import { siteConfig } from "../../config/site";
import { BrowserTokenStore } from "../../services/auth/TokenStore";
import { bundledContent } from "../../services/content/BundledContentReader";
import { GitHubContentRepository } from "../../services/content/GitHubContentRepository";
import { LocalDraftStore } from "../../services/content/LocalDraftStore";
import { GitHubClient } from "../../services/github/GitHubClient";

// Composition root for the admin feature: the only place that picks concrete
// implementations. Everything else depends on the interfaces.

export const tokenStore = new BrowserTokenStore();

/** Unpublished work; survives reloads until published or discarded. */
export const draftStore = new LocalDraftStore(bundledContent, "portfolio:draft");

/** Always mirrors the editor so the live preview can render it. */
export const previewStore = new LocalDraftStore(bundledContent, "portfolio:preview");

export const createGitHubClient = (token: string) => new GitHubClient(token, siteConfig.repository);

export const createRepository = (client: GitHubClient) =>
  new GitHubContentRepository({
    client,
    contentPath: siteConfig.contentPath,
    publicDir: siteConfig.publicDir,
    fallback: bundledContent,
  });
