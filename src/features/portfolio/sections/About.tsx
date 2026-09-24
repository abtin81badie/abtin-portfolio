import styled from "styled-components";
import { accentAt, color, font, media, radius } from "../../../theme/tokens";
import { AnimatedCounter } from "../../../ui/AnimatedCounter";
import { SpotlightCard } from "../../../ui/Card";
import { Icon } from "../../../ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;

  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

const Paragraph = styled(StaggerItem)`
  font-size: 1.08rem;
  line-height: 1.85;
  color: ${color.text};

  & + & {
    margin-top: 20px;
  }
`;

const CtaLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
  font-weight: 600;
  color: ${color.primary};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: gap 0.25s ease, border-color 0.25s ease;

  &:hover {
    gap: 14px;
    border-color: currentColor;
  }
`;

const Stats = styled(Stagger)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const StatValue = styled.div<{ $accent: string }>`
  font-family: ${font.display};
  font-size: clamp(2rem, 4vw, 2.6rem);
  font-weight: 700;
  line-height: 1.1;
  color: ${({ $accent }) => $accent};
`;

const StatLabel = styled.div`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${color.textMuted};
`;

const Facts = styled(Reveal)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const Fact = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  font-size: 0.88rem;
  color: ${color.text};
  text-decoration: none;
  border-radius: ${radius.pill};
  border: 1px solid ${color.border};
  background: var(--surface);
  transition: border-color 0.25s ease, color 0.25s ease;

  &[href]:hover {
    border-color: ${color.primary};
    color: ${color.primary};
  }
`;

export function About({ config, index }: SectionProps) {
  const { profile, stats } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Layout>
        <div>
          <Stagger gap={0.12}>
            {profile.about.map((paragraph, i) => (
              <Paragraph key={i}>{paragraph}</Paragraph>
            ))}
          </Stagger>
          {profile.cta.url && (
            <Reveal delay={0.2}>
              <CtaLink href={profile.cta.url} target="_blank" rel="noopener noreferrer">
                {profile.cta.label || profile.cta.url} <Icon name="arrowRight" size={18} />
              </CtaLink>
            </Reveal>
          )}
        </div>

        <div>
          <Stats gap={0.1}>
            {stats.map((stat, i) => {
              const accent = accentAt(i);
              return (
                <SpotlightCard key={`${stat.label}-${i}`} accent={accent}>
                  <StatValue $accent={accent}>
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </SpotlightCard>
              );
            })}
          </Stats>
          <Facts delay={0.2}>
            {profile.location && (
              <Fact as="span">
                <Icon name="pin" size={16} /> {profile.location}
              </Fact>
            )}
            {profile.email && (
              <Fact href={`mailto:${profile.email}`}>
                <Icon name="email" size={16} /> {profile.email}
              </Fact>
            )}
          </Facts>
        </div>
      </Layout>
    </Section>
  );
}
