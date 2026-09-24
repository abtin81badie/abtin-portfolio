# Abtin Badie — Portfolio

Personal portfolio built with **React 19, TypeScript, styled-components and Framer Motion**, deployed to GitHub Pages at <https://abtin81badie.github.io/abtin-portfolio/>.

It comes with a built-in **admin panel** (`/#/admin`) for editing every piece of content (experience, projects, skills, certifications and so on) from the browser. Clicking **Publish** commits the change to this repository, and GitHub Actions redeploys the site automatically.

## ✨ Highlights

- **Smooth, modern UI**: scroll-triggered reveals, staggered entrances, a letter-by-letter hero, rotating roles, cursor-following card glows, an animated nav pill, a scroll-linked experience timeline, a filterable project grid, count-up stats and a reading-progress bar.
- **Light and dark themes**: the site follows your OS setting by default, remembers your toggle choice, and never flashes the wrong theme on load.
- **Accessible**: honours `prefers-reduced-motion`, uses semantic sections, keyboard focus styles and ARIA labels.
- **Content as data**: all text lives in [`src/content/content.json`](src/content/content.json), so no code changes are needed to update it.
- **Admin panel**: edit forms, reordering, a live side-by-side preview, auto-saved drafts, photo and resume uploads, JSON import/export, and conflict detection.
- **Fast**: the admin panel is lazy-loaded, so visitors never download it. Vendor code is split into long-lived cached chunks.
- **Quality gates**: ESLint, strict TypeScript and Vitest unit tests run in CI on every PR and before every deploy.

## 🛠️ Admin panel: editing your content

1. Open **`https://abtin81badie.github.io/abtin-portfolio/#/admin`** (or `http://localhost:5173/abtin-portfolio/#/admin` locally).
2. Create a **fine-grained GitHub token** at [github.com/settings/personal-access-tokens/new](https://github.com/settings/personal-access-tokens/new):
   - *Repository access*: **Only select repositories**, then pick `abtin-portfolio`
   - *Permissions*, then *Contents*: **Read and write**
3. Paste the token and sign in. The token is kept only in your browser.
4. Edit anything. Changes are auto-saved as a local draft, and **Live preview** shows the result instantly.
5. Click **Publish** (or press `Ctrl/⌘ + S`). This commits `content.json`, and the deploy workflow puts it live in about a minute.

No token? Choose **Edit locally without publishing**. You can still edit, preview and **Export JSON**, then commit the file yourself.

### Why is there no separate server?

GitHub Pages only serves static files, so a traditional backend (Express, a database, …) would need paid hosting and ongoing maintenance. Instead, **GitHub is the backend**:

| Concern | How it's handled |
| --- | --- |
| Storage | `src/content/content.json` and `public/` files in this repo |
| Auth | Your GitHub token (only accounts with write access can publish) |
| Write API | GitHub REST *Contents* API |
| History and rollback | Every publish is a normal git commit, so you can revert any change |
| Deploy | `.github/workflows/deploy.yml` builds and pushes to `gh-pages` |

## 🏗️ Architecture

```
src/
├── app/                 App shell: theme, motion config, hash routing, lazy admin
├── config/site.ts       Repository, branch and content path (single place to change)
├── content/content.json ← all portfolio content
├── domain/              Framework-free model: types, normalization, blank-item factories
├── services/            Infrastructure behind interfaces
│   ├── content/         ContentReader / ContentPublisher / AssetUploader / DraftStore
│   │                    + Bundled, GitHub and LocalStorage implementations
│   ├── github/          Minimal GitHub REST client + UTF-8 safe base64
│   └── auth/            Token storage
├── theme/               Design tokens (CSS variables), global styles, light/dark mode
├── ui/                  Reusable primitives: Section, SpotlightCard, ChipList, Button,
│                        Reveal/Stagger animations, AnimatedCounter, Icon
├── hooks/               useHashRoute, useActiveSection, useScrollTo
└── features/
    ├── portfolio/       Public site: layout, sections, section registry
    └── admin/           Admin panel: schema-driven editors, panels, session, publishing
```

### SOLID in practice

- **Single responsibility**: each section only renders its slice of content. `GitHubClient` only talks HTTP, `GitHubContentRepository` only maps content to files, and `useContentEditor` only manages the edit, draft and publish workflow.
- **Open/closed**:
  - Sections are rendered from a **registry** (`features/portfolio/sectionRegistry.ts`). Their order and visibility come from content, so you can rearrange the page without touching code.
  - Admin forms are **declarative schemas** (`features/admin/editorPages.ts`) rendered by one generic `FieldEditor`. Making a new field editable means adding a line to a schema, not writing a new form.
  - Admin tools plug into a panel registry.
- **Liskov substitution**: every section implements the same `SectionProps`. Every content source implements the same `ContentReader`, so the bundled JSON, a local draft or GitHub are interchangeable.
- **Interface segregation**: the public site depends only on `ContentReader`. The admin panel additionally uses `ContentPublisher`, `AssetUploader` and `DraftStore`.
- **Dependency inversion**: components read content through `useContent()` and never import the JSON directly. `features/admin/services.ts` is the single composition root that picks concrete implementations.

### Adding a new section

1. Add its id to `SECTION_IDS` and its data type to `PortfolioContent` in `src/domain/content.ts`, then add it to `normalize.ts`.
2. Create the component in `src/features/portfolio/sections/` (receives `{ config, index }`).
3. Register it in `sectionRegistry.ts`.
4. Describe its form in `src/features/admin/editorPages.ts`. The admin UI is generated from that schema.

## 🚀 Development

```bash
npm install
npm run dev        # http://localhost:5173/abtin-portfolio/
npm run check      # lint + unit tests + type-check + production build
npm test           # unit tests only
```

Deployment is automatic on every push to `main`. `npm run deploy` still works as a manual fallback.
