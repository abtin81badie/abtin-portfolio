// Where the admin panel reads and publishes content.
// Change these if the repository is renamed or moved.
export const siteConfig = {
  repository: {
    owner: "abtin81badie",
    name: "abtin-portfolio",
    branch: "main",
  },
  /** JSON file that holds every piece of portfolio content. */
  contentPath: "src/content/content.json",
  /** Folder whose files are served as-is (profile photo, resume PDF…). */
  publicDir: "public",
} as const;

export const repositoryUrl = `https://github.com/${siteConfig.repository.owner}/${siteConfig.repository.name}`;

/** Resolves a file living in /public against the deployed base path. */
export const publicAsset = (file: string): string =>
  /^(https?:)?\/\//.test(file) ? file : `${import.meta.env.BASE_URL}${file.replace(/^\/+/, "")}`;
