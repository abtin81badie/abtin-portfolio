import type { PortfolioContent } from "../../domain/content";

// Small, role-specific interfaces (Interface Segregation): the public site
// only ever needs a reader; the admin panel also needs a publisher.

export interface ContentReader {
  load(): Promise<PortfolioContent>;
}

export interface PublishResult {
  commitUrl: string;
}

export interface ContentPublisher {
  /**
   * Persists content. Implementations reject with a conflict error when the
   * stored version changed since it was loaded, unless `force` is set.
   */
  publish(content: PortfolioContent, message: string, options?: { force?: boolean }): Promise<PublishResult>;
}

export interface AssetUploader {
  /** Uploads a binary file and returns the path it is served from. */
  upload(fileName: string, file: Blob, message: string): Promise<PublishResult>;
}

/** Local, unpublished working copy of the content. */
export interface DraftStore {
  load(): PortfolioContent | null;
  save(content: PortfolioContent): void;
  clear(): void;
  subscribe(listener: (content: PortfolioContent | null) => void): () => void;
}
