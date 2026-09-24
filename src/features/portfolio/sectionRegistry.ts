import type { ComponentType } from "react";
import type { SectionId } from "../../domain/content";
import { About } from "./sections/About";
import { Certifications } from "./sections/Certifications";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { Featured } from "./sections/Featured";
import { Honors } from "./sections/Honors";
import { Projects } from "./sections/Projects";
import { Research } from "./sections/Research";
import { Resume } from "./sections/Resume";
import { Skills } from "./sections/Skills";
import type { SectionProps } from "./sections/types";

/**
 * Maps a section id to the component that renders it (Open/Closed): to add a
 * new section, add its id to the domain, write the component, register it
 * here — nothing else in the page has to change. Order and visibility come
 * from content, so they are editable from the admin panel.
 */
export const sectionRegistry: Record<SectionId, ComponentType<SectionProps>> = {
  about: About,
  education: Education,
  research: Research,
  featured: Featured,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  honors: Honors,
  certifications: Certifications,
  resume: Resume,
};
