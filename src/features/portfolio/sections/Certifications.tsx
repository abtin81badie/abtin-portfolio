import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { accentAt, color, ease, font } from "../../../theme/tokens";
import { Button } from "../../../ui/Button";
import { SpotlightCard } from "../../../ui/Card";
import { ChipList } from "../../../ui/Chip";
import { Icon } from "../../../ui/Icon";
import { Stagger } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const INITIAL_COUNT = 6;

const Grid = styled(Stagger)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 18px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
`;

const Emoji = styled.span`
  font-size: 1.6rem;
`;

const Issuer = styled.span<{ $accent: string }>`
  font-size: 0.82rem;
  font-weight: 700;
  color: ${({ $accent }) => $accent};
`;

const Title = styled.h3`
  font-size: 1.02rem;
  line-height: 1.4;
`;

const Meta = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin-top: 10px;
  font-size: 0.84rem;
  color: ${color.textMuted};

  code {
    font-family: ${font.mono};
    font-size: 0.78rem;
  }
`;

const Verify = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Chips = styled.div`
  margin-top: 14px;
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export function Certifications({ config, index }: SectionProps) {
  const { certifications } = useContent();
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certifications : certifications.slice(0, INITIAL_COUNT);

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Grid gap={0.07}>
        <AnimatePresence initial={false}>
          {visible.map((cert, i) => {
            const accent = accentAt(i);
            return (
              <motion.div
                key={`${cert.title}-${i}`}
                initial={i >= INITIAL_COUNT ? { opacity: 0, y: 24 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: i >= INITIAL_COUNT ? (i - INITIAL_COUNT) * 0.05 : 0, ease: ease.out }}
              >
                <SpotlightCard accent={accent}>
                  <Top>
                    <Emoji>{cert.icon}</Emoji>
                    <Issuer $accent={accent}>{cert.issuer}</Issuer>
                  </Top>
                  <Title>{cert.title}</Title>
                  <Meta>
                    {cert.date && <span>{cert.date}</span>}
                    {cert.credentialId && (
                      <span>
                        ID <code>{cert.credentialId}</code>
                      </span>
                    )}
                  </Meta>
                  {cert.url && (
                    <Verify href={cert.url} target="_blank" rel="noopener noreferrer">
                      Show credential <Icon name="external" size={14} />
                    </Verify>
                  )}
                  {cert.skills.length > 0 && (
                    <Chips>
                      <ChipList items={cert.skills} accent={accent} gap={6} />
                    </Chips>
                  )}
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Grid>

      {certifications.length > INITIAL_COUNT && (
        <More>
          <Button variant="ghost" onClick={() => setShowAll((s) => !s)}>
            {showAll ? "Show fewer" : `Show all ${certifications.length} certifications`}
            <motion.span animate={{ rotate: showAll ? 180 : 0 }} style={{ display: "grid" }}>
              <Icon name="chevronDown" />
            </motion.span>
          </Button>
        </More>
      )}
    </Section>
  );
}
