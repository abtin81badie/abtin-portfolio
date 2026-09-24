import type {
  Certification,
  EducationItem,
  ExperienceGroup,
  Honor,
  Metric,
  ModelResult,
  Project,
  ResearchArea,
  Role,
  SkillGroup,
  SocialLink,
  Stat,
} from "./content";

// Blank items used when the admin clicks "Add". Keeping them here (instead of
// inside the editor) lets the normalizer and the admin share one definition.
export const blank = {
  stat: (): Stat => ({ value: 0, decimals: 0, suffix: "", label: "New stat" }),
  social: (): SocialLink => ({ label: "Website", url: "https://", icon: "website" }),
  education: (): EducationItem => ({
    school: "New school",
    degree: "",
    period: "",
    grade: "",
    description: "",
    skills: [],
  }),
  research: (): ResearchArea => ({ title: "New research area", icon: "✨", items: [] }),
  metric: (): Metric => ({ label: "Metric", value: "" }),
  modelResult: (): ModelResult => ({
    tag: "Experiment",
    name: "New model",
    accent: "indigo",
    highlight: false,
    metrics: [],
  }),
  role: (): Role => ({ title: "New role", period: "", location: "", description: "", skills: [] }),
  experience: (): ExperienceGroup => ({
    organization: "New organization",
    icon: "💼",
    summary: "",
    accent: "indigo",
    roles: [blank.role()],
  }),
  project: (): Project => ({ title: "New project", url: "", category: "", description: [], tech: [] }),
  skillGroup: (): SkillGroup => ({ title: "New skill group", icon: "🛠️", accent: "indigo", skills: [] }),
  honor: (): Honor => ({ icon: "🏅", title: "New honor", detail: "" }),
  certification: (): Certification => ({
    title: "New certification",
    issuer: "",
    icon: "📜",
    date: "",
    credentialId: "",
    url: "",
    skills: [],
  }),
};
