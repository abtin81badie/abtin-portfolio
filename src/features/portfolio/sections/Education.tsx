import styled from "styled-components";
import { accentAt, color, font, media } from "../../../theme/tokens";
import { SpotlightCard } from "../../../ui/Card";
import { ChipList } from "../../../ui/Chip";
import { Stagger } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const List = styled(Stagger)`
  display: grid;
  gap: 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 18px;

  ${media.sm} {
    flex-direction: column;
    gap: 8px;
  }
`;

const School = styled.h3`
  font-size: clamp(1.25rem, 2.4vw, 1.55rem);
`;

const Degree = styled.p<{ $accent: string }>`
  margin-top: 6px;
  font-weight: 600;
  color: ${({ $accent }) => $accent};
`;

const Period = styled.span`
  flex-shrink: 0;
  font-family: ${font.mono};
  font-size: 0.82rem;
  color: ${color.textMuted};
`;

const Grade = styled.p`
  margin-bottom: 18px;
  color: ${color.text};

  strong {
    color: ${color.heading};
  }
`;

const Description = styled.p`
  margin-bottom: 18px;
  color: ${color.textMuted};
`;

export function Education({ config, index }: SectionProps) {
  const { education } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <List>
        {education.map((item, i) => {
          const accent = accentAt(i);
          return (
            <SpotlightCard key={`${item.school}-${i}`} accent={accent} lift={false}>
              <Top>
                <div>
                  <School>{item.school}</School>
                  {item.degree && <Degree $accent={accent}>{item.degree}</Degree>}
                </div>
                {item.period && <Period>{item.period}</Period>}
              </Top>
              {item.grade && (
                <Grade>
                  <strong>Grade:</strong> {item.grade}
                </Grade>
              )}
              {item.description && <Description>{item.description}</Description>}
              <ChipList items={item.skills} accent={accent} />
            </SpotlightCard>
          );
        })}
      </List>
    </Section>
  );
}
