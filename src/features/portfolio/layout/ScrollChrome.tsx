import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { useScrollTo } from "../../../hooks/useScrollTo";
import { gradient } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";

const Progress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 60;
  transform-origin: 0 50%;
  background: ${gradient.brand};
`;

const TopButton = styled(motion.button)`
  position: fixed;
  right: clamp(16px, 3vw, 32px);
  bottom: clamp(16px, 3vw, 32px);
  z-index: 40;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 16px;
  color: #fff;
  cursor: pointer;
  background: ${gradient.brand};
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.45);
`;

/** Reading-progress bar plus a floating "back to top" button. */
export function ScrollChrome() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);
  const scrollTo = useScrollTo();

  useMotionValueEvent(scrollY, "change", (y) => setShowTop(y > 700));

  return (
    <>
      <Progress style={{ scaleX }} />
      <AnimatePresence>
        {showTop && (
          <TopButton
            aria-label="Back to top"
            onClick={() => scrollTo("top")}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon name="arrowUp" />
          </TopButton>
        )}
      </AnimatePresence>
    </>
  );
}
