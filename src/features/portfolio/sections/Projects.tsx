import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useMemo, useState } from "react";
import styled from "styled-components";
import { accentAt, alpha, color, ease, font, gradient, radius } from "../../../theme/tokens";
import { Button } from "../../../ui/Button";
import { ChipList } from "../../../ui/Chip";
import { Icon } from "../../../ui/Icon";
import { Reveal } from "../../../ui/motion";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const INITIAL_COUNT = 6;
const ALL = "All";

const Filters = styled(Reveal)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`;

const Filter = styled.button<{ $active: boolean }>`
  position: relative;
  padding: 8px 16px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: ${radius.pill};
  border: 1px solid ${({ $active }) => ($active ? "transparent" : color.border)};
  background: var(--surface);
  color: ${({ $active }) => ($active ? "#fff" : color.text)};
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    border-color: ${({ $active }) => ($active ? "transparent" : color.primary)};
  }

  span {
    position: relative;
    z-index: 1;
  }

  sup {
    position: relative;
    z-index: 1;
    margin-left: 4px;
    font-size: 0.7rem;
    opacity: 0.7;
  }
`;

const FilterPill = styled(motion.div)`
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: ${gradient.brand};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr));
  gap: 20px;
`;

const Card = styled(motion.article)<{ $accent: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 26px;
  border-radius: ${radius.lg};
  background: var(--surface);
  border: 1px solid ${color.border};
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ $accent }) => $accent}, transparent);
  }

  &:hover {
    border-color: ${({ $accent }) => alpha($accent, 0.5)};
    box-shadow: 0 22px 50px ${({ $accent }) => alpha($accent, 0.18)};
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

const Category = styled.span<{ $accent: string }>`
  font-family: ${font.mono};
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
`;

const Title = styled.h3`
  margin-top: 6px;
  font-size: 1.18rem;
  line-height: 1.3;
`;

const RepoLink = styled(motion.a)<{ $accent: string }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: ${color.heading};
  border: 1px solid ${color.border};
  transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: #fff;
    background: ${({ $accent }) => $accent};
    border-color: transparent;
  }
`;

const Bullets = styled.ul`
  flex: 1;
  display: grid;
  gap: 10px;
  padding-left: 18px;
  font-size: 0.94rem;
  color: ${color.textMuted};

  li::marker {
    color: ${color.primary};
  }
`;

const Footer = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${color.border};
`;

const More = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export function Projects({ config, index }: SectionProps) {
  const { projects } = useContent();
  const [filter, setFilter] = useState(ALL);
  const [showAll, setShowAll] = useState(false);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => p.category && counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return [[ALL, projects.length] as const, ...counts.entries()];
  }, [projects]);

  const filtered = projects
    .map((project, i) => ({ project, key: `${project.title}-${i}`, accent: accentAt(i) }))
    .filter(({ project }) => filter === ALL || project.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      {categories.length > 2 && (
        <Filters>
          <LayoutGroup id="project-filters">
            {categories.map(([name, count]) => (
              <Filter key={name} $active={filter === name} onClick={() => setFilter(name)} aria-pressed={filter === name}>
                {filter === name && (
                  <FilterPill layoutId="filter-pill" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <span>{name}</span>
                <sup>{count}</sup>
              </Filter>
            ))}
          </LayoutGroup>
        </Filters>
      )}

      <Grid layout>
        <AnimatePresence mode="popLayout">
          {visible.map(({ project, key, accent }) => (
            <Card
              key={key}
              $accent={accent}
              layout
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, ease: ease.out }}
              whileHover={{ y: -6 }}
            >
              <Head>
                <div>
                  {project.category && <Category $accent={accent}>{project.category}</Category>}
                  <Title>{project.title}</Title>
                </div>
                {project.url && (
                  <RepoLink
                    $accent={accent}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    whileHover={{ rotate: -8, scale: 1.08 }}
                  >
                    <Icon name={project.url.includes("github.com") ? "github" : "external"} size={19} />
                  </RepoLink>
                )}
              </Head>
              <Bullets>
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </Bullets>
              {project.tech.length > 0 && (
                <Footer>
                  <ChipList items={project.tech} accent={accent} gap={6} />
                </Footer>
              )}
            </Card>
          ))}
        </AnimatePresence>
      </Grid>

      {filtered.length > INITIAL_COUNT && (
        <More>
          <Button variant="ghost" onClick={() => setShowAll((s) => !s)}>
            {showAll ? "Show fewer projects" : `Show all ${filtered.length} projects`}
            <motion.span animate={{ rotate: showAll ? 180 : 0 }} style={{ display: "grid" }}>
              <Icon name="chevronDown" />
            </motion.span>
          </Button>
        </More>
      )}
    </Section>
  );
}
