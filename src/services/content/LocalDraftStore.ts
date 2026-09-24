import type { PortfolioContent } from "../../domain/content";
import { normalizeContent } from "../../domain/normalize";
import type { DraftStore } from "./ContentRepository";

/**
 * Keeps the admin's unpublished edits in localStorage. Because the `storage`
 * event fires in other tabs/iframes of the same origin, the live preview can
 * subscribe and re-render as you type.
 */
export class LocalDraftStore implements DraftStore {
  private readonly key: string;
  private readonly fallback: PortfolioContent;

  constructor(fallback: PortfolioContent, key = "portfolio:draft") {
    this.fallback = fallback;
    this.key = key;
  }

  load(): PortfolioContent | null {
    try {
      const raw = localStorage.getItem(this.key);
      return raw ? normalizeContent(JSON.parse(raw), this.fallback) : null;
    } catch {
      return null;
    }
  }

  save(content: PortfolioContent): void {
    try {
      localStorage.setItem(this.key, JSON.stringify(content));
    } catch {
      /* storage full or blocked — drafts are a convenience, not critical */
    }
  }

  clear(): void {
    try {
      localStorage.removeItem(this.key);
    } catch {
      /* ignore */
    }
  }

  subscribe(listener: (content: PortfolioContent | null) => void): () => void {
    const onStorage = (event: StorageEvent) => {
      if (event.key === this.key) listener(this.load());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }
}
