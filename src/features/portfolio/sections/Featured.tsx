import { motion } from "framer-motion";
import styled from "styled-components";
import { accentAt, accentHex, alpha, color, font, gradient, media, radius } from "../../../theme/tokens";
import { ButtonLink } from "../../../ui/Button";
import { SpotlightCard } from "../../../ui/Card";
import { ChipList } from "../../../ui/Chip";
import { Icon } from "../../../ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../../../ui/motion";
import { scaleIn } from "../../../ui/variants";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const Shell = styled(Reveal)`
  position: relative;
  border-radius: 28px;
  padding: 1px;
  background: ${gradient.brand};
  box-shadow: var(--shadow-lg);
`;

const Inner = styled.div`
  border-radius: 27px;
  overflow: hidden;
  background: ${color.bgElevated};
`;

const Banner = styled.div`
  position: relative;
  padding: clamp(28px, 5vw, 48px);
  color: #fff;
  background: radial-gradient(600px 300px at 10% 0%, rgba(255, 255, 255, 0.18), transparent 60%),
    ${gradient.brand};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 36px 36px;
    mask-image: linear-gradient(90deg, transparent, #000 70%);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 70%);
    pointer-events: none;
  }

  h3 {
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: clamp(1.5rem, 3.4vw, 2.3rem);
    max-width: 820px;
  }

  p {
    position: relative;
    z-index: 1;
    margin-top: 12px;
    opacity: 0.9;
  }
`;

const Badges = styled(Stagger)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
`;

const Badge = styled(motion.span)`
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${radius.pill};
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(6px);
`;

const Body = styled.div`
  padding: clamp(24px, 5vw, 48px);
  display: grid;
  gap: 40px;
`;

const Lead = styled.p`
  font-size: 1.08rem;
  line-height: 1.85;
`;

const Notice = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 18px;
  border-radius: ${radius.md};
  font-size: 0.93rem;
  color: ${color.text};
  background: ${alpha(accentHex.amber, 0.1)};
  border: 1px solid ${alpha(accentHex.amber, 0.35)};

  svg {
    flex-shrink: 0;
    margin-top: 2px;
    color: ${accentHex.amber};
  }
`;

const SubHead = styled.h4`
  font-family: ${font.mono};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${color.textMuted};
  margin-bottom: 18px;
`;

const Pipeline = styled(Stagger)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  counter-reset: step;

  ${media.sm} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Step = styled(motion.div)<{ $accent: string }>`
  position: relative;
  padding: 16px 14px 14px;
  border-radius: ${radius.md};
  font-size: 0.86rem;
  font-weight: 600;
  line-height: 1.4;
  color: ${color.heading};
  background: ${({ $accent }) => alpha($accent, 0.08)};
  border: 1px solid ${({ $accent }) => alpha($accent, 0.3)};
  counter-increment: step;

  &::before {
    content: counter(step, decimal-leading-zero);
    display: block;
    margin-bottom: 8px;
    font-family: ${font.mono};
    font-size: 0.72rem;
    color: ${({ $accent }) => $accent};
  }
`;

const Results = styled(Stagger)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 16px;
`;

const ResultTag = styled.span<{ $accent: string }>`
  font-family: ${font.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
`;

const ResultName = styled.h5`
  margin: 6px 0 14px;
  font-family: ${font.display};
  font-size: 1.1rem;
  color: ${color.heading};
`;

const Metric = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  font-size: 0.92rem;
  border-top: 1px dashed ${color.border};

  span:first-child {
    color: ${color.textMuted};
  }

  span:last-child {
    font-weight: 700;
    color: ${color.heading};
  }
`;

const Best = styled.span<{ $accent: string }>`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 10px;
  font-size: 0.72rem;
  font-weight: 700;
  color: #fff;
  border-radius: ${radius.pill};
  background: ${({ $accent }) => $accent};
  box-shadow: 0 6px 18px ${({ $accent }) => alpha($accent, 0.5)};
`;

export function Featured({ config, index }: SectionProps) {
  const { featured } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Shell>
        <Inner>
          <Banner>
            {featured.badges.length > 0 && (
              <Badges gap={0.08}>
                {featured.badges.map((badge) => (
                  <Badge key={badge} variants={scaleIn}>
                    {badge}
                  </Badge>
                ))}
              </Badges>
            )}
            <h3>{featured.title}</h3>
            {featured.affiliation && <p>{featured.affiliation}</p>}
          </Banner>

          <Body>
            <div>
              <Lead>{featured.summary}</Lead>
              {featured.link && (
                <ButtonLink
                  variant="primary"
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 20 }}
                >
                  View project <Icon name="external" />
                </ButtonLink>
              )}
            </div>

            {featured.notice && (
              <Reveal>
                <Notice>
                  <Icon name="lock" />
                  <span>{featured.notice}</span>
                </Notice>
              </Reveal>
            )}

            {featured.pipeline.length > 0 && (
              <div>
                <SubHead>End-to-end pipeline</SubHead>
                <Pipeline gap={0.09}>
                  {featured.pipeline.map((stage, i) => (
                    <Step
                      key={`${stage}-${i}`}
                      $accent={accentAt(i)}
                      variants={scaleIn}
                      whileHover={{ y: -4 }}
                    >
                      {stage}
                    </Step>
                  ))}
                </Pipeline>
              </div>
            )}

            {featured.results.length > 0 && (
              <div>
                <SubHead>Model evolution & results</SubHead>
                <Results gap={0.12}>
                  {featured.results.map((result, i) => {
                    const accent = accentHex[result.accent];
                    return (
                      <SpotlightCard key={`${result.name}-${i}`} accent={accent}>
                        {result.highlight && <Best $accent={accent}>★ Best</Best>}
                        <ResultTag $accent={accent}>{result.tag}</ResultTag>
                        <ResultName>{result.name}</ResultName>
                        {result.metrics.map((metric) => (
                          <Metric key={metric.label}>
                            <span>{metric.label}</span>
                            <span>{metric.value}</span>
                          </Metric>
                        ))}
                      </SpotlightCard>
                    );
                  })}
                </Results>
              </div>
            )}

            {featured.highlights && (
              <Stagger>
                <SubHead>Highlights</SubHead>
                <StaggerItem>
                  <Lead as="p">{featured.highlights}</Lead>
                </StaggerItem>
              </Stagger>
            )}

            {featured.stack.length > 0 && (
              <div>
                <SubHead>Tech stack</SubHead>
                <ChipList items={featured.stack} accent={accentHex.violet} />
              </div>
            )}
          </Body>
        </Inner>
      </Shell>
    </Section>
  );
}
