import type { AccentName } from "../domain/content";

// Design tokens. Colors that change between light and dark mode are exposed
// as CSS custom properties so switching themes never re-renders React.

export const accentHex: Record<AccentName, string> = {
  indigo: "#6366f1",
  violet: "#8b5cf6",
  pink: "#ec4899",
  cyan: "#06b6d4",
  emerald: "#10b981",
  amber: "#f59e0b",
};

const ROTATION: AccentName[] = ["indigo", "violet", "pink", "cyan", "emerald", "amber"];

/** Picks an explicit accent or rotates through the palette by index. */
export const accentAt = (index: number, name?: AccentName): string =>
  accentHex[name ?? ROTATION[index % ROTATION.length]];

export const color = {
  bg: "var(--bg)",
  bgElevated: "var(--bg-elevated)",
  surface: "var(--surface)",
  surfaceStrong: "var(--surface-strong)",
  border: "var(--border)",
  borderStrong: "var(--border-strong)",
  text: "var(--text)",
  textMuted: "var(--text-muted)",
  heading: "var(--heading)",
  primary: "var(--primary)",
  glow: "var(--glow)",
} as const;

export const gradient = {
  brand: "linear-gradient(120deg, #6366f1 0%, #8b5cf6 40%, #ec4899 100%)",
  brandAnimated: "linear-gradient(120deg, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1)",
  soft: "linear-gradient(135deg, rgba(99,102,241,0.14), rgba(139,92,246,0.10) 50%, rgba(236,72,153,0.14))",
};

export const font = {
  body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  display: `"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, sans-serif`,
  mono: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
};

export const radius = { sm: "10px", md: "16px", lg: "24px", pill: "999px" };

export const shadow = {
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
};

export const layout = { maxWidth: "1180px", navHeight: "72px", gutter: "clamp(16px, 4vw, 32px)" };

export const media = {
  sm: "@media (max-width: 640px)",
  md: "@media (max-width: 900px)",
  lg: "@media (max-width: 1180px)",
};

/** Hex color with an alpha suffix, e.g. alpha("#6366f1", 0.2). */
export const alpha = (hex: string, opacity: number): string =>
  `${hex}${Math.round(Math.max(0, Math.min(1, opacity)) * 255)
    .toString(16)
    .padStart(2, "0")}`;

export const ease = {
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
};
