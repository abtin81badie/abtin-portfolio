import type { SectionConfig } from "../../../domain/content";

/** Every registered section receives the same props (Liskov: interchangeable). */
export interface SectionProps {
  config: SectionConfig;
  index: number;
}
