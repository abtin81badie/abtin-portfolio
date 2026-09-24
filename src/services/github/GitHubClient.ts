// Thin, dependency-free wrapper around the few GitHub REST endpoints the
// admin panel needs. It knows nothing about portfolio content.

export interface RepositoryRef {
  owner: string;
  name: string;
  branch: string;
}

export interface RemoteFile {
  sha: string;
  /** Base64 content; empty for files larger than 1 MB. */
  contentBase64: string;
}

export interface CommitResult {
  sha: string;
  commitUrl: string;
}

export class GitHubError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "GitHubError";
    this.status = status;
  }

  get isConflict(): boolean {
    return this.status === 409 || this.status === 422;
  }

  get isUnauthorized(): boolean {
    return this.status === 401 || this.status === 403;
  }
}

const API = "https://api.github.com";

export class GitHubClient {
  private readonly token: string;
  private readonly repo: RepositoryRef;

  constructor(token: string, repo: RepositoryRef) {
    this.token = token;
    this.repo = repo;
  }

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await fetch(`${API}${path}`, {
      ...init,
      cache: "no-store",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${this.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        ...(init.body ? { "Content-Type": "application/json" } : {}),
        ...init.headers,
      },
    });
    if (!response.ok) {
      let message = response.statusText;
      try {
        const body = (await response.json()) as { message?: string };
        if (body.message) message = body.message;
      } catch {
        /* keep statusText */
      }
      throw new GitHubError(response.status, message);
    }
    return (await response.json()) as T;
  }

  private contentsPath(path: string): string {
    const encoded = path.split("/").map(encodeURIComponent).join("/");
    return `/repos/${this.repo.owner}/${this.repo.name}/contents/${encoded}`;
  }

  /** Returns the login of the token owner and whether they can push. */
  async verifyAccess(): Promise<{ login: string; canPush: boolean }> {
    const [user, repo] = await Promise.all([
      this.request<{ login: string }>("/user"),
      this.request<{ permissions?: { push?: boolean } }>(`/repos/${this.repo.owner}/${this.repo.name}`),
    ]);
    return { login: user.login, canPush: Boolean(repo.permissions?.push) };
  }

  async getFile(path: string): Promise<RemoteFile | null> {
    try {
      const file = await this.request<{ sha: string; content?: string }>(
        `${this.contentsPath(path)}?ref=${encodeURIComponent(this.repo.branch)}`,
      );
      return { sha: file.sha, contentBase64: file.content ?? "" };
    } catch (error) {
      if (error instanceof GitHubError && error.status === 404) return null;
      throw error;
    }
  }

  /** Creates or updates a file with a single commit on the configured branch. */
  async putFile(args: {
    path: string;
    contentBase64: string;
    message: string;
    sha?: string;
  }): Promise<CommitResult> {
    const result = await this.request<{ content: { sha: string }; commit: { html_url: string } }>(
      this.contentsPath(args.path),
      {
        method: "PUT",
        body: JSON.stringify({
          message: args.message,
          content: args.contentBase64,
          branch: this.repo.branch,
          ...(args.sha ? { sha: args.sha } : {}),
        }),
      },
    );
    return { sha: result.content.sha, commitUrl: result.commit.html_url };
  }
}
