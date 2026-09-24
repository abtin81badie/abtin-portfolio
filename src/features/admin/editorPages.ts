import { ACCENTS, SOCIAL_ICONS, type PortfolioContent } from "../../domain/content";
import { blank } from "../../domain/factories";
import type { FieldMap, FieldSchema } from "./schema";

const accentOptions = ACCENTS.map((a) => ({ value: a, label: a[0].toUpperCase() + a.slice(1) }));
const iconOptions = SOCIAL_ICONS.map((i) => ({ value: i, label: i[0].toUpperCase() + i.slice(1) }));

const emoji = (label = "Icon"): FieldSchema => ({
  kind: "text",
  label,
  half: true,
  help: "An emoji, e.g. 🎓",
});

const roleFields: FieldMap = {
  title: { kind: "text", label: "Title" },
  period: { kind: "text", label: "Period", half: true, placeholder: "Jan 2026 – Present · 6 mos" },
  location: { kind: "text", label: "Location / supervisor", half: true },
  description: { kind: "text", label: "Description", multiline: true },
  skills: { kind: "tags", label: "Skills" },
};

export interface EditorPage {
  id: string;
  label: string;
  icon: string;
  description: string;
  /** Top-level content key this page edits. */
  key: keyof PortfolioContent;
  schema: FieldSchema;
}

/**
 * Every admin form in one place. Adding a new editable area = adding an entry.
 */
export const editorPages: EditorPage[] = [
  {
    id: "profile",
    label: "Profile & Hero",
    icon: "👤",
    description: "Your name, the rotating roles in the hero, and the About Me text.",
    key: "profile",
    schema: {
      kind: "object",
      label: "Profile",
      fields: {
        name: { kind: "text", label: "Full name", half: true },
        eyebrow: { kind: "text", label: "Eyebrow line", half: true },
        availability: {
          kind: "text",
          label: "Availability badge",
          help: "Shown with a green pulsing dot. Leave empty to hide.",
        },
        roles: { kind: "tags", label: "Rotating roles", help: "Cycled one by one in the hero: “I'm a …”." },
        headline: { kind: "text", label: "Hero headline", multiline: true },
        about: { kind: "textList", label: "About Me paragraphs", itemLabel: "paragraph", multiline: true },
        location: { kind: "text", label: "Location", half: true },
        email: { kind: "text", label: "Email", half: true },
        photo: {
          kind: "text",
          label: "Photo file",
          half: true,
          help: "File in /public. Upload a new one under Assets.",
        },
        cta: {
          kind: "object",
          label: "About Me call-to-action link",
          fields: {
            label: { kind: "text", label: "Label", half: true },
            url: { kind: "text", label: "URL", half: true },
          },
        },
      },
    },
  },
  {
    id: "experience",
    label: "Experience",
    icon: "💼",
    description: "Organizations and the roles you held there, newest first.",
    key: "experience",
    schema: {
      kind: "list",
      label: "Organizations",
      itemLabel: "organization",
      titleKey: "organization",
      subtitleKey: "summary",
      iconKey: "icon",
      create: blank.experience,
      fields: {
        organization: { kind: "text", label: "Organization" },
        icon: emoji(),
        accent: { kind: "select", label: "Accent color", half: true, options: accentOptions },
        summary: { kind: "text", label: "Summary", placeholder: "Full-time · 10 mos" },
        roles: {
          kind: "list",
          label: "Roles",
          itemLabel: "role",
          titleKey: "title",
          subtitleKey: "period",
          create: blank.role,
          fields: roleFields,
        },
      },
    },
  },
  {
    id: "projects",
    label: "Projects",
    icon: "🚀",
    description: "Project cards. The category is used for the filter buttons.",
    key: "projects",
    schema: {
      kind: "list",
      label: "Projects",
      itemLabel: "project",
      titleKey: "title",
      subtitleKey: "category",
      create: blank.project,
      fields: {
        title: { kind: "text", label: "Title" },
        url: { kind: "text", label: "Link (GitHub or website)", half: true },
        category: { kind: "text", label: "Category", half: true, placeholder: "Deep Learning" },
        description: { kind: "textList", label: "Bullet points", itemLabel: "bullet", multiline: true },
        tech: { kind: "tags", label: "Tech stack" },
      },
    },
  },
  {
    id: "featured",
    label: "Featured Project",
    icon: "⭐",
    description: "The big highlighted project (your thesis).",
    key: "featured",
    schema: {
      kind: "object",
      label: "Featured project",
      fields: {
        title: { kind: "text", label: "Title" },
        badges: { kind: "tags", label: "Badges" },
        affiliation: { kind: "text", label: "Affiliation / supervisors" },
        summary: { kind: "text", label: "Summary", multiline: true },
        notice: { kind: "text", label: "Notice (e.g. private project)", multiline: true, help: "Leave empty to hide." },
        link: { kind: "text", label: "Project link", help: "Optional. Shows a “View project” button." },
        pipeline: { kind: "textList", label: "Pipeline steps", itemLabel: "step" },
        results: {
          kind: "list",
          label: "Model results",
          itemLabel: "result",
          titleKey: "name",
          subtitleKey: "tag",
          create: blank.modelResult,
          fields: {
            name: { kind: "text", label: "Model name", half: true },
            tag: { kind: "text", label: "Tag", half: true },
            accent: { kind: "select", label: "Accent color", half: true, options: accentOptions },
            highlight: { kind: "toggle", label: "Mark as best", half: true },
            metrics: {
              kind: "list",
              label: "Metrics",
              itemLabel: "metric",
              titleKey: "label",
              subtitleKey: "value",
              create: blank.metric,
              fields: {
                label: { kind: "text", label: "Label", half: true },
                value: { kind: "text", label: "Value", half: true },
              },
            },
          },
        },
        highlights: { kind: "text", label: "Highlights", multiline: true },
        stack: { kind: "tags", label: "Tech stack" },
      },
    },
  },
  {
    id: "education",
    label: "Education",
    icon: "🎓",
    description: "Degrees and schools.",
    key: "education",
    schema: {
      kind: "list",
      label: "Education",
      itemLabel: "school",
      titleKey: "school",
      subtitleKey: "degree",
      create: blank.education,
      fields: {
        school: { kind: "text", label: "School" },
        degree: { kind: "text", label: "Degree", half: true },
        period: { kind: "text", label: "Period", half: true },
        grade: { kind: "text", label: "Grade", half: true },
        description: { kind: "text", label: "Description", multiline: true },
        skills: { kind: "tags", label: "Coursework / skills" },
      },
    },
  },
  {
    id: "skills",
    label: "Skills",
    icon: "🛠️",
    description: "Skill groups shown as chip clouds.",
    key: "skills",
    schema: {
      kind: "list",
      label: "Skill groups",
      itemLabel: "group",
      titleKey: "title",
      iconKey: "icon",
      create: blank.skillGroup,
      fields: {
        title: { kind: "text", label: "Title" },
        icon: emoji(),
        accent: { kind: "select", label: "Accent color", half: true, options: accentOptions },
        skills: { kind: "tags", label: "Skills" },
      },
    },
  },
  {
    id: "research",
    label: "Research",
    icon: "🔬",
    description: "Research interest areas.",
    key: "research",
    schema: {
      kind: "list",
      label: "Research areas",
      itemLabel: "area",
      titleKey: "title",
      iconKey: "icon",
      create: blank.research,
      fields: {
        title: { kind: "text", label: "Title", half: true },
        icon: emoji(),
        items: { kind: "textList", label: "Topics", itemLabel: "topic" },
      },
    },
  },
  {
    id: "certifications",
    label: "Certifications",
    icon: "📜",
    description: "Licenses, courses and credentials.",
    key: "certifications",
    schema: {
      kind: "list",
      label: "Certifications",
      itemLabel: "certification",
      titleKey: "title",
      subtitleKey: "issuer",
      iconKey: "icon",
      create: blank.certification,
      fields: {
        title: { kind: "text", label: "Title" },
        issuer: { kind: "text", label: "Issuer", half: true },
        icon: emoji(),
        date: { kind: "text", label: "Date", half: true, placeholder: "Issued Dec 2025" },
        credentialId: { kind: "text", label: "Credential ID", half: true },
        url: { kind: "text", label: "Credential URL", help: "Optional. Adds a “Show credential” link." },
        skills: { kind: "tags", label: "Skills" },
      },
    },
  },
  {
    id: "honors",
    label: "Honors",
    icon: "🏅",
    description: "Awards and rankings.",
    key: "honors",
    schema: {
      kind: "list",
      label: "Honors",
      itemLabel: "honor",
      titleKey: "title",
      subtitleKey: "detail",
      iconKey: "icon",
      create: blank.honor,
      fields: {
        title: { kind: "text", label: "Title" },
        icon: emoji("Medal"),
        detail: { kind: "text", label: "Detail" },
      },
    },
  },
  {
    id: "stats",
    label: "Stats",
    icon: "📈",
    description: "Animated counters in the About section. The first one also appears in the hero.",
    key: "stats",
    schema: {
      kind: "list",
      label: "Stats",
      itemLabel: "stat",
      titleKey: "label",
      create: blank.stat,
      fields: {
        label: { kind: "text", label: "Label" },
        value: { kind: "number", label: "Value", half: true, step: 0.01 },
        decimals: { kind: "number", label: "Decimals", half: true, min: 0, max: 4 },
        suffix: { kind: "text", label: "Suffix", half: true, placeholder: "+ or /4" },
      },
    },
  },
  {
    id: "socials",
    label: "Social Links",
    icon: "🔗",
    description: "Icon links in the hero and footer.",
    key: "socials",
    schema: {
      kind: "list",
      label: "Links",
      itemLabel: "link",
      titleKey: "label",
      subtitleKey: "url",
      create: blank.social,
      fields: {
        label: { kind: "text", label: "Label", half: true },
        icon: { kind: "select", label: "Icon", half: true, options: iconOptions },
        url: { kind: "text", label: "URL", help: "Use mailto:you@example.com for email." },
      },
    },
  },
  {
    id: "sections",
    label: "Sections & Order",
    icon: "🧭",
    description: "Reorder, rename or hide whole sections of the page.",
    key: "sections",
    schema: {
      kind: "list",
      label: "Sections",
      itemLabel: "section",
      titleKey: "title",
      subtitleKey: "id",
      fixed: true,
      fields: {
        id: { kind: "readonly", label: "Section", half: true },
        visible: { kind: "toggle", label: "Visible", half: true },
        title: { kind: "text", label: "Title", half: true },
        navLabel: { kind: "text", label: "Menu label", half: true },
        subtitle: { kind: "text", label: "Subtitle" },
      },
    },
  },
  {
    id: "resume",
    label: "Resume",
    icon: "📄",
    description: "Resume call-to-action. Upload a new PDF under Assets.",
    key: "resume",
    schema: {
      kind: "object",
      label: "Resume",
      fields: {
        text: { kind: "text", label: "Text", multiline: true },
        file: { kind: "text", label: "PDF file in /public", half: true },
        downloadName: { kind: "text", label: "Download file name", half: true },
      },
    },
  },
  {
    id: "meta",
    label: "SEO",
    icon: "🌐",
    description: "Browser tab title and search-engine description.",
    key: "meta",
    schema: {
      kind: "object",
      label: "Site",
      fields: {
        title: { kind: "text", label: "Page title" },
        description: { kind: "text", label: "Meta description", multiline: true },
      },
    },
  },
];
