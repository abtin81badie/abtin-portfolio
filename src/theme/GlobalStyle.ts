import { createGlobalStyle } from "styled-components";
import { font, layout } from "./tokens";

export const GlobalStyle = createGlobalStyle`
  :root, :root[data-theme="light"] {
    color-scheme: light;
    --bg: #f6f7fb;
    --bg-elevated: #ffffff;
    --surface: rgba(255, 255, 255, 0.78);
    --surface-strong: #ffffff;
    --border: rgba(15, 23, 42, 0.08);
    --border-strong: rgba(15, 23, 42, 0.16);
    --text: #1e2433;
    --text-muted: #5b6475;
    --heading: #0b1020;
    --primary: #6366f1;
    --glow: rgba(99, 102, 241, 0.22);
    --grid-line: rgba(15, 23, 42, 0.05);
    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(15, 23, 42, 0.04);
    --shadow-md: 0 8px 30px rgba(15, 23, 42, 0.08);
    --shadow-lg: 0 24px 60px rgba(79, 70, 229, 0.18);
  }

  :root[data-theme="dark"] {
    color-scheme: dark;
    --bg: #070913;
    --bg-elevated: #0d1120;
    --surface: rgba(20, 25, 45, 0.62);
    --surface-strong: #121729;
    --border: rgba(255, 255, 255, 0.08);
    --border-strong: rgba(255, 255, 255, 0.16);
    --text: #d9deea;
    --text-muted: #939cb3;
    --heading: #ffffff;
    --primary: #818cf8;
    --glow: rgba(129, 140, 248, 0.28);
    --grid-line: rgba(255, 255, 255, 0.045);
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 10px 30px rgba(0, 0, 0, 0.35);
    --shadow-lg: 0 24px 60px rgba(99, 102, 241, 0.25);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
  }

  body {
    font-family: ${font.body};
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.4s ease, color 0.4s ease;
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: calc(${layout.navHeight} + 8px);
  }

  h1, h2, h3, h4 {
    font-family: ${font.display};
    color: var(--heading);
    line-height: 1.15;
    letter-spacing: -0.02em;
  }

  a { color: inherit; }

  img { max-width: 100%; display: block; }

  button, input, textarea, select { font: inherit; color: inherit; }

  :focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
    border-radius: 6px;
  }

  ::selection {
    background: rgba(139, 92, 246, 0.3);
  }

  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #6366f1, #ec4899);
    border-radius: 999px;
    border: 2px solid var(--bg);
  }
`;
