import { motion, type HTMLMotionProps } from "framer-motion";
import { useCallback, type MouseEvent } from "react";
import styled from "styled-components";
import { alpha, color, radius, shadow } from "../theme/tokens";
import { fadeUp } from "./variants";

const Base = styled(motion.div)<{ $accent: string }>`
  --accent: ${({ $accent }) => $accent};
  position: relative;
  isolation: isolate;
  overflow: hidden;
  height: 100%;
  padding: clamp(22px, 3vw, 30px);
  border-radius: ${radius.lg};
  background: ${color.surface};
  border: 1px solid ${color.border};
  box-shadow: ${shadow.sm};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: border-color 0.35s ease, box-shadow 0.35s ease, background-color 0.4s ease;

  /* Cursor-following glow */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.35s ease;
    background: radial-gradient(
      420px circle at var(--mx, 50%) var(--my, 0%),
      ${({ $accent }) => alpha($accent, 0.16)},
      transparent 45%
    );
  }

  /* Accent hairline on top */
  &::after {
    content: "";
    position: absolute;
    left: 24px;
    right: 24px;
    top: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.55;
    transition: opacity 0.35s ease, left 0.35s ease, right 0.35s ease;
  }

  &:hover {
    border-color: ${({ $accent }) => alpha($accent, 0.45)};
    box-shadow: 0 20px 50px ${({ $accent }) => alpha($accent, 0.18)};
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover::after {
    opacity: 1;
    left: 0;
    right: 0;
  }
`;

type CardProps = HTMLMotionProps<"div"> & { accent: string; lift?: boolean };

/** Glassy card with a hover lift and a glow that follows the cursor. */
export function SpotlightCard({ accent, lift = true, onMouseMove, ...props }: CardProps) {
  const track = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
      onMouseMove?.(event);
    },
    [onMouseMove],
  );

  return (
    <Base
      $accent={accent}
      variants={fadeUp}
      whileHover={lift ? { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } } : undefined}
      onMouseMove={track}
      {...props}
    />
  );
}
