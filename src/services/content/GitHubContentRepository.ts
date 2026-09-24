import type { PortfolioContent } from "../../domain/content";
import { normalizeContent } from "../../domain/normalize";
import { bytesToBase64, decodeText, encodeText } from "../github/base64";
import { GitHubClient, GitHubError } from "../github/GitHubClient";
import type {
  AssetUploader,
  ContentPublisher,
  ContentReader,
  PublishResult,
} from "./ContentRepository";

export class ContentConflictError extends Error {
  constructor() {
    super("The content on GitHub changed since you loaded it.");
    this.name = "ContentConflictError";
  }
}

/**
 * Uses a GitHub repository as the content backend: reading returns the latest
 * committed JSON, publishing commits a new version (which triggers the deploy
 * workflow). Tracks the file SHA to detect concurrent edits.
 */
export class GitHubContentRepository implements ContentReader, ContentPublisher, AssetUploader {
  private readonly client: GitHubClient;
  private readonly contentPath: string;
  private readonly publicDir: string;
  private readonly fallback: PortfolioContent;
  private sha: string | undefined;

  constructor(options: {
    client: GitHubClient;
    contentPath: string;
    publicDir: string;
    fallback: PortfolioContent;
  }) {
    this.client = options.client;
    this.contentPath = options.contentPath;
    this.publicDir = options.publicDir;
    this.fallback = options.fallback;
  }

  async load(): Promise<PortfolioContent> {
    const file = await this.client.getFile(this.contentPath);
    if (!file) {
      this.sha = undefined;
      return this.fallback;
    }
    this.sha = file.sha;
    return normalizeContent(JSON.parse(decodeText(file.contentBase64)), this.fallback);
  }

  async publish(
    content: PortfolioContent,
    message: string,
    options: { force?: boolean } = {},
  ): Promise<PublishResult> {
    if (options.force) {
      this.sha = (await this.client.getFile(this.contentPath))?.sha;
    }
    try {
      const result = await this.client.putFile({
        path: this.contentPath,
        contentBase64: encodeText(`${JSON.stringify(content, null, 2)}\n`),
        message,
        sha: this.sha,
      });
      this.sha = result.sha;
      return { commitUrl: result.commitUrl };
    } catch (error) {
      if (error instanceof GitHubError && error.isConflict) throw new ContentConflictError();
      throw error;
    }
  }

  async upload(fileName: string, file: Blob, message: string): Promise<PublishResult> {
    const path = `${this.publicDir}/${fileName}`;
    const existing = await this.client.getFile(path);
    const bytes = new Uint8Array(await file.arrayBuffer());
    const result = await this.client.putFile({
      path,
      contentBase64: bytesToBase64(bytes),
      message,
      sha: existing?.sha,
    });
    return { commitUrl: result.commitUrl };
  }
}
