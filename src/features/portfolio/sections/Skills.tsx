import styled from "styled-components";
import { accentHex, alpha } from "../../../theme/tokens";
import { SpotlightCard } from "../../../ui/Card";
import { ChipList } from "../../../ui/Chip";
import { Stagger } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const Grid = styled(Stagger)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 20px;
`;

const Title = styled.h3<{ $accent: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 1.2rem;

  span {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    font-size: 1.3rem;
    background: ${({ $accent }) => alpha($accent, 0.14)};
  }
`;

const Count = styled.small`
  margin-left: auto;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0.6;
`;

export function Skills({ config, index }: SectionProps) {
  const { skills } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Grid gap={0.12}>
        {skills.map((group, i) => {
          const accent = accentHex[group.accent];
          return (
            <SpotlightCard key={`${group.title}-${i}`} accent={accent}>
              <Title $accent={accent}>
                <span>{group.icon}</span>
                {group.title}
                <Count>{group.skills.length}</Count>
              </Title>
              <ChipList items={group.skills} accent={accent} />
            </SpotlightCard>
          );
        })}
      </Grid>
    </Section>
  );
}
