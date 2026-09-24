import {
  ACCENTS,
  SECTION_IDS,
  SOCIAL_ICONS,
  type AccentName,
  type PortfolioContent,
  type SectionConfig,
} from "./content";
import { blank } from "./factories";

// Turns untrusted JSON (a hand-edited file, an imported backup, an older
// content version) into a complete, well-typed PortfolioContent.
// Missing values fall back to `fallback` for top-level objects and to blank
// items for list entries, so the site never crashes on partial data.

type Obj = Record<string, unknown>;

const isObj = (v: unknown): v is Obj => typeof v === "object" && v !== null && !Array.isArray(v);
const obj = (v: unknown): Obj => (isObj(v) ? v : {});
const str = (v: unknown, fallback = ""): string => (typeof v === "string" ? v : fallback);
const num = (v: unknown, fallback = 0): number =>
  typeof v === "number" && Number.isFinite(v) ? v : fallback;
const bool = (v: unknown, fallback = false): boolean => (typeof v === "boolean" ? v : fallback);
const strList = (v: unknown, fallback: string[] = []): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === "string") : fallback;
const list = <T>(v: unknown, fallback: T[], item: (raw: Obj) => T): T[] =>
  Array.isArray(v) ? v.filter(isObj).map(item) : fallback;
const oneOf = <T extends string>(options: readonly T[], v: unknown, fallback: T): T =>
  options.includes(v as T) ? (v as T) : fallback;
const accent = (v: unknown): AccentName => oneOf(ACCENTS, v, "indigo");

function normalizeSections(raw: unknown, fallback: SectionConfig[]): SectionConfig[] {
  const parsed = list(raw, fallback, (s) => ({
    id: oneOf(SECTION_IDS, s.id, "about"),
    navLabel: str(s.navLabel),
    title: str(s.title),
    subtitle: str(s.subtitle),
    visible: bool(s.visible, true),
  }));
  // Keep only known, unique sections, then append any the file forgot about.
  const seen = new Set<string>();
  const known = parsed.filter((s) => SECTION_IDS.includes(s.id) && !seen.has(s.id) && seen.add(s.id));
  const missing = fallback.filter((s) => !seen.has(s.id));
  return [...known, ...missing];
}

export function normalizeContent(raw: unknown, fallback: PortfolioContent): PortfolioContent {
  const r = obj(raw);
  const meta = obj(r.meta);
  const profile = obj(r.profile);
  const cta = obj(profile.cta);
  const featured = obj(r.featured);
  const resume = obj(r.resume);
  const f = fallback;

  return {
    meta: {
      title: str(meta.title, f.meta.title),
      description: str(meta.description, f.meta.description),
    },
    profile: {
      name: str(profile.name, f.profile.name),
      eyebrow: str(profile.eyebrow, f.profile.eyebrow),
      availability: str(profile.availability, f.profile.availability),
      roles: strList(profile.roles, f.profile.roles),
      headline: str(profile.headline, f.profile.headline),
      about: strList(profile.about, f.profile.about),
      photo: str(profile.photo, f.profile.photo),
      location: str(profile.location, f.profile.location),
      email: str(profile.email, f.profile.email),
      cta: { label: str(cta.label, f.profile.cta.label), url: str(cta.url, f.profile.cta.url) },
    },
    stats: list(r.stats, f.stats, (s) => {
      const b = blank.stat();
      return {
        value: num(s.value, b.value),
        decimals: Math.max(0, Math.min(4, Math.round(num(s.decimals, b.decimals)))),
        suffix: str(s.suffix),
        label: str(s.label, b.label),
      };
    }),
    socials: list(r.socials, f.socials, (s) => ({
      label: str(s.label),
      url: str(s.url),
      icon: oneOf(SOCIAL_ICONS, s.icon, "website"),
    })),
    sections: normalizeSections(r.sections, f.sections),
    education: list(r.education, f.education, (e) => ({
      school: str(e.school),
      degree: str(e.degree),
      period: str(e.period),
      grade: str(e.grade),
      description: str(e.description),
      skills: strList(e.skills),
    })),
    research: list(r.research, f.research, (a) => ({
      title: str(a.title),
      icon: str(a.icon),
      items: strList(a.items),
    })),
    featured: {
      title: str(featured.title, f.featured.title),
      badges: strList(featured.badges, f.featured.badges),
      affiliation: str(featured.affiliation, f.featured.affiliation),
      summary: str(featured.summary, f.featured.summary),
      notice: str(featured.notice, f.featured.notice),
      link: str(featured.link, f.featured.link),
      pipeline: strList(featured.pipeline, f.featured.pipeline),
      results: list(featured.results, f.featured.results, (m) => ({
        tag: str(m.tag),
        name: str(m.name),
        accent: accent(m.accent),
        highlight: bool(m.highlight),
        metrics: list(m.metrics, [], (x) => ({ label: str(x.label), value: str(x.value) })),
      })),
      highlights: str(featured.highlights, f.featured.highlights),
      stack: strList(featured.stack, f.featured.stack),
    },
    experience: list(r.experience, f.experience, (g) => ({
      organization: str(g.organization),
      icon: str(g.icon),
      summary: str(g.summary),
      accent: accent(g.accent),
      roles: list(g.roles, [], (role) => ({
        title: str(role.title),
        period: str(role.period),
        location: str(role.location),
        description: str(role.description),
        skills: strList(role.skills),
      })),
    })),
    projects: list(r.projects, f.projects, (p) => ({
      title: str(p.title),
      url: str(p.url),
      category: str(p.category),
      description: strList(p.description),
      tech: strList(p.tech),
    })),
    skills: list(r.skills, f.skills, (s) => ({
      title: str(s.title),
      icon: str(s.icon),
      accent: accent(s.accent),
      skills: strList(s.skills),
    })),
    honors: list(r.honors, f.honors, (h) => ({
      icon: str(h.icon),
      title: str(h.title),
      detail: str(h.detail),
    })),
    certifications: list(r.certifications, f.certifications, (c) => ({
      title: str(c.title),
      issuer: str(c.issuer),
      icon: str(c.icon),
      date: str(c.date),
      credentialId: str(c.credentialId),
      url: str(c.url),
      skills: strList(c.skills),
    })),
    resume: {
      text: str(resume.text, f.resume.text),
      file: str(resume.file, f.resume.file),
      downloadName: str(resume.downloadName, f.resume.downloadName),
    },
  };
}
