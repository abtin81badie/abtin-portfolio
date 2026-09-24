import styled from "styled-components";
import { accentAt, alpha, color } from "../../../theme/tokens";
import { SpotlightCard } from "../../../ui/Card";
import { Stagger } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const Grid = styled(Stagger)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 20px;
`;

const IconBox = styled.div<{ $accent: string }>`
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  font-size: 1.5rem;
  border-radius: 16px;
  background: ${({ $accent }) => alpha($accent, 0.14)};
  border: 1px solid ${({ $accent }) => alpha($accent, 0.3)};
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

  *:hover > & {
    transform: rotate(-8deg) scale(1.08);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 14px;
`;

const Items = styled.ul`
  list-style: none;
  display: grid;
  gap: 10px;
`;

const Item = styled.li<{ $accent: string }>`
  position: relative;
  padding-left: 20px;
  color: ${color.textMuted};
  font-size: 0.95rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 8px;
    height: 8px;
    border-radius: 3px;
    background: ${({ $accent }) => $accent};
    transform: rotate(45deg);
  }
`;

export function Research({ config, index }: SectionProps) {
  const { research } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Grid>
        {research.map((area, i) => {
          const accent = accentAt(i);
          return (
            <SpotlightCard key={`${area.title}-${i}`} accent={accent}>
              <IconBox $accent={accent}>{area.icon}</IconBox>
              <Title>{area.title}</Title>
              <Items>
                {area.items.map((item) => (
                  <Item key={item} $accent={accent}>
                    {item}
                  </Item>
                ))}
              </Items>
            </SpotlightCard>
          );
        })}
      </Grid>
    </Section>
  );
}
