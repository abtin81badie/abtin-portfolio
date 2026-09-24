import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, stagger } from "./variants";

// Scroll-triggered reveal wrappers built on the shared variants.

const viewport = { once: true, amount: 0.12 } as const;

type DivProps = HTMLMotionProps<"div">;

/** Fades its content up once it scrolls into view. */
export function Reveal({ delay = 0, variants = fadeUp, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants}
      transition={delay ? { delay } : undefined}
      {...props}
    />
  );
}

/** Container that reveals its <StaggerItem> children one after another. */
export function Stagger({
  gap = 0.08,
  delay = 0,
  ...props
}: DivProps & { gap?: number; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={stagger(gap, delay)}
      {...props}
    />
  );
}

export function StaggerItem({ variants = fadeUp, ...props }: DivProps) {
  return <motion.div variants={variants} {...props} />;
}
