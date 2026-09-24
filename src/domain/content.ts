// Domain model for everything shown on the portfolio.
// The UI, the admin panel and the persistence layer all depend on these
// types — never on each other — so each can change independently.

export const ACCENTS = ["indigo", "violet", "pink", "cyan", "emerald", "amber"] as const;
export type AccentName = (typeof ACCENTS)[number];

export const SOCIAL_ICONS = ["email", "linkedin", "github", "telegram", "website"] as const;
export type SocialIcon = (typeof SOCIAL_ICONS)[number];

export const SECTION_IDS = [
  "about",
  "education",
  "research",
  "featured",
  "experience",
  "projects",
  "skills",
  "honors",
  "certifications",
  "resume",
] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export interface SiteMeta {
  title: string;
  description: string;
}

export interface CallToAction {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  eyebrow: string;
  availability: string;
  roles: string[];
  headline: string;
  about: string[];
  photo: string;
  location: string;
  email: string;
  cta: CallToAction;
}

export interface Stat {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: SocialIcon;
}

export interface SectionConfig {
  id: SectionId;
  navLabel: string;
  title: string;
  subtitle: string;
  visible: boolean;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  grade: string;
  description: string;
  skills: string[];
}

export interface ResearchArea {
  title: string;
  icon: string;
  items: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface ModelResult {
  tag: string;
  name: string;
  accent: AccentName;
  highlight: boolean;
  metrics: Metric[];
}

export interface FeaturedProject {
  title: string;
  badges: string[];
  affiliation: string;
  summary: string;
  notice: string;
  link: string;
  pipeline: string[];
  results: ModelResult[];
  highlights: string;
  stack: string[];
}

export interface Role {
  title: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface ExperienceGroup {
  organization: string;
  icon: string;
  summary: string;
  accent: AccentName;
  roles: Role[];
}

export interface Project {
  title: string;
  url: string;
  category: string;
  description: string[];
  tech: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  accent: AccentName;
  skills: string[];
}

export interface Honor {
  icon: string;
  title: string;
  detail: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
  date: string;
  credentialId: string;
  url: string;
  skills: string[];
}

export interface ResumeInfo {
  text: string;
  file: string;
  downloadName: string;
}

export interface PortfolioContent {
  meta: SiteMeta;
  profile: Profile;
  stats: Stat[];
  socials: SocialLink[];
  sections: SectionConfig[];
  education: EducationItem[];
  research: ResearchArea[];
  featured: FeaturedProject;
  experience: ExperienceGroup[];
  projects: Project[];
  skills: SkillGroup[];
  honors: Honor[];
  certifications: Certification[];
  resume: ResumeInfo;
}
