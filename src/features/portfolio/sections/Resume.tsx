import { motion, useReducedMotion } from "framer-motion";
import styled from "styled-components";
import { publicAsset } from "../../../config/site";
import { color, gradient, media } from "../../../theme/tokens";
import { ButtonLink } from "../../../ui/Button";
import { Icon } from "../../../ui/Icon";
import { Reveal } from "../../../ui/motion";
import { Container } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const Wrapper = styled.section`
  padding: clamp(64px, 9vw, 110px) 0;
`;

const Band = styled(Reveal)`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 32px;
  padding: clamp(32px, 6vw, 64px);
  border-radius: 32px;
  color: #fff;
  background: ${gradient.brand};
  box-shadow: var(--shadow-lg);

  ${media.md} {
    grid-template-columns: 1fr;
  }

  h2 {
    color: #fff;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
  }

  p {
    margin-top: 12px;
    max-width: 560px;
    opacity: 0.92;
    font-size: 1.05rem;
  }
`;

const Orb = styled(motion.div)`
  position: absolute;
  z-index: -1;
  width: 380px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.35), transparent 65%);
`;

const Download = styled(ButtonLink)`
  && {
    color: ${color.heading};
    background: #fff;
    border-color: transparent;
    padding: 16px 28px;
    font-size: 1rem;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.25);
  }

  &&:hover {
    color: #4f46e5;
  }
`;

export function Resume({ config }: SectionProps) {
  const { resume } = useContent();
  const reduced = useReducedMotion();
  if (!resume.file) return null;

  return (
    <Wrapper id={config.id} aria-labelledby={`${config.id}-title`}>
      <Container>
        <Band>
          <Orb
            style={{ top: "-40%", right: "-8%" }}
            animate={reduced ? undefined : { scale: [1, 1.2, 1], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <Orb
            style={{ bottom: "-50%", left: "-10%" }}
            animate={reduced ? undefined : { scale: [1.1, 0.9, 1.1], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div>
            <h2 id={`${config.id}-title`}>{config.title}</h2>
            {(config.subtitle || resume.text) && <p>{resume.text || config.subtitle}</p>}
          </div>
          <Download href={publicAsset(resume.file)} download={resume.downloadName || true}>
            <Icon name="download" /> Download Resume
          </Download>
        </Band>
      </Container>
    </Wrapper>
  );
}
