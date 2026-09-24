import type { PortfolioContent } from "../../domain/content";
import { normalizeContent } from "../../domain/normalize";
import type { ContentReader } from "./ContentRepository";
import rawContent from "../../content/content.json";

/** Content compiled into the site at build time — what visitors see. */
export const bundledContent: PortfolioContent = normalizeContent(
  rawContent,
  rawContent as unknown as PortfolioContent,
);

export class BundledContentReader implements ContentReader {
  async load(): Promise<PortfolioContent> {
    return bundledContent;
  }
}
