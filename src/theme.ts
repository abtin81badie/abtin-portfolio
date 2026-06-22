// src/theme.ts
// Central design tokens so every section shares one colorful, consistent look.

export const theme = {
  colors: {
    text: "#1f2430",
    textMuted: "#5b6472",
    heading: "#161a23",
    bg: "#f5f6fc",
    bgAlt: "#ffffff",
    card: "#ffffff",
    border: "#e8eaf3",
    primary: "#6366f1",
    primaryDark: "#4f46e5",
    violet: "#8b5cf6",
    pink: "#ec4899",
    cyan: "#06b6d4",
    emerald: "#10b981",
    amber: "#f59e0b",
    dark: "#0b1020",
  },
  // Signature brand gradient used for titles, buttons and accents.
  gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 45%, #ec4899 100%)",
  gradientSoft:
    "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(236,72,153,0.12) 100%)",
  heroGradient:
    "radial-gradient(1200px 600px at 15% 20%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(900px 500px at 85% 30%, rgba(236,72,153,0.30), transparent 60%), radial-gradient(900px 600px at 50% 100%, rgba(6,182,212,0.25), transparent 60%), linear-gradient(160deg, #0b1020 0%, #131a36 100%)",
  shadow: "0 10px 30px rgba(20, 23, 51, 0.08)",
  shadowHover: "0 18px 45px rgba(99, 102, 241, 0.20)",
  radius: "16px",
  // A rotating accent palette so cards / chips feel lively but coordinated.
  accents: ["#6366f1", "#8b5cf6", "#ec4899", "#06b6d4", "#10b981", "#f59e0b"],
};

export type AppTheme = typeof theme;
