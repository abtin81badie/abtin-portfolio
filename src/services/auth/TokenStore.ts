export interface TokenStore {
  get(): string | null;
  set(token: string, remember: boolean): void;
  clear(): void;
}

const KEY = "portfolio:github-token";

/**
 * Stores the GitHub token in sessionStorage by default (cleared when the tab
 * closes) or localStorage when the admin chooses "remember this device".
 * The token never leaves the browser except in requests to api.github.com.
 */
export class BrowserTokenStore implements TokenStore {
  get(): string | null {
    try {
      return sessionStorage.getItem(KEY) ?? localStorage.getItem(KEY);
    } catch {
      return null;
    }
  }

  set(token: string, remember: boolean): void {
    this.clear();
    try {
      (remember ? localStorage : sessionStorage).setItem(KEY, token);
    } catch {
      /* ignore */
    }
  }

  clear(): void {
    try {
      sessionStorage.removeItem(KEY);
      localStorage.removeItem(KEY);
    } catch {
      /* ignore */
    }
  }
}
