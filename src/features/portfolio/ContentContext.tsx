import { createContext, useContext, type ReactNode } from "react";
import type { PortfolioContent } from "../../domain/content";

// Sections depend on this abstraction, not on where content comes from
// (bundled JSON, a local draft, GitHub…) — Dependency Inversion.
const ContentContext = createContext<PortfolioContent | null>(null);

export function ContentProvider({ content, children }: { content: PortfolioContent; children: ReactNode }) {
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContent(): PortfolioContent {
  const content = useContext(ContentContext);
  if (!content) throw new Error("useContent must be used inside <ContentProvider>");
  return content;
}
