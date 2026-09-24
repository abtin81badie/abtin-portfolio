import { motion } from "framer-motion";
import styled from "styled-components";
import { alpha, radius } from "../theme/tokens";
import { scaleIn, stagger } from "./variants";

export const Chip = styled(motion.span)<{ $accent: string }>`
  display: inline-flex;
  align-items: center;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1;
  padding: 7px 12px;
  border-radius: ${radius.pill};
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => alpha($accent, 0.1)};
  border: 1px solid ${({ $accent }) => alpha($accent, 0.25)};
  white-space: nowrap;
`;

const Wrap = styled(motion.div)<{ $gap: number }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap}px;
`;

interface ChipListProps {
  items: string[];
  accent: string;
  gap?: number;
  className?: string;
}

/** Row of chips that pop in one by one when scrolled into view. */
export function ChipList({ items, accent, gap = 8, className }: ChipListProps) {
  if (items.length === 0) return null;
  return (
    <Wrap
      $gap={gap}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger(0.035)}
    >
      {items.map((item, i) => (
        <Chip
          key={`${item}-${i}`}
          $accent={accent}
          variants={scaleIn}
          whileHover={{ y: -2, scale: 1.05 }}
        >
          {item}
        </Chip>
      ))}
    </Wrap>
  );
}
