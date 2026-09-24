import { useEffect } from "react";
import type { PortfolioContent } from "../../domain/content";
import { ContentProvider } from "./ContentContext";
import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { ScrollChrome } from "./layout/ScrollChrome";
import { sectionRegistry } from "./sectionRegistry";
import { Hero } from "./sections/Hero";

export function PortfolioPage({ content }: { content: PortfolioContent }) {
  useEffect(() => {
    document.title = content.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", content.meta.description);
  }, [content.meta.title, content.meta.description]);

  const sections = content.sections.filter((s) => s.visible);

  return (
    <ContentProvider content={content}>
      <ScrollChrome />
      <Navbar />
      <main>
        <Hero />
        {sections.map((config, index) => {
          const Component = sectionRegistry[config.id];
          return <Component key={config.id} config={config} index={index} />;
        })}
      </main>
      <Footer />
    </ContentProvider>
  );
}
