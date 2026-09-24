import { motion } from "framer-motion";
import styled from "styled-components";
import { accentAt, color } from "../../../theme/tokens";
import { SpotlightCard } from "../../../ui/Card";
import { Stagger } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const Grid = styled(Stagger)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const Medal = styled(motion.div)`
  flex-shrink: 0;
  font-size: 2.4rem;
  line-height: 1;
  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.18));
`;

const Title = styled.h3`
  font-size: 1.08rem;
  line-height: 1.35;
`;

const Detail = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${color.textMuted};
`;

export function Honors({ config, index }: SectionProps) {
  const { honors } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Grid gap={0.12}>
        {honors.map((honor, i) => (
          <SpotlightCard key={`${honor.title}-${i}`} accent={accentAt(i)}>
            <Row>
              <Medal whileHover={{ rotate: [0, -14, 12, -6, 0], scale: 1.15 }} transition={{ duration: 0.6 }}>
                {honor.icon}
              </Medal>
              <div>
                <Title>{honor.title}</Title>
                {honor.detail && <Detail>{honor.detail}</Detail>}
              </div>
            </Row>
          </SpotlightCard>
        ))}
      </Grid>
    </Section>
  );
}
