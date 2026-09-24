import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";
import type { ExperienceGroup, Role } from "../../../domain/content";
import { accentHex, alpha, color, ease, font, media, radius } from "../../../theme/tokens";
import { Button } from "../../../ui/Button";
import { ChipList } from "../../../ui/Chip";
import { Icon } from "../../../ui/Icon";
import { Reveal } from "../../../ui/motion";
import { fadeUp } from "../../../ui/variants";
import { Section } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import type { SectionProps } from "./types";

const VISIBLE_ROLES = 3;

const Groups = styled.div`
  display: grid;
  gap: clamp(48px, 7vw, 72px);
`;

const OrgHeader = styled(Reveal)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const OrgIcon = styled.div<{ $accent: string }>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  font-size: 1.6rem;
  border-radius: 18px;
  background: ${({ $accent }) => alpha($accent, 0.14)};
  border: 1px solid ${({ $accent }) => alpha($accent, 0.35)};
  box-shadow: 0 10px 30px ${({ $accent }) => alpha($accent, 0.2)};
`;

const OrgName = styled.h3`
  font-size: clamp(1.2rem, 2.4vw, 1.5rem);
`;

const OrgMeta = styled.p`
  margin-top: 2px;
  font-size: 0.9rem;
  color: ${color.textMuted};
`;

const Timeline = styled.div`
  position: relative;
  display: grid;
  gap: 16px;
  padding-left: 44px;

  ${media.sm} {
    padding-left: 30px;
  }
`;

const Track = styled.div`
  position: absolute;
  left: 27px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  border-radius: 2px;
  background: ${color.border};

  ${media.sm} {
    left: 13px;
  }
`;

const Progress = styled(motion.div)<{ $accent: string }>`
  position: absolute;
  inset: 0;
  transform-origin: top;
  border-radius: inherit;
  background: linear-gradient(180deg, ${({ $accent }) => $accent}, ${({ $accent }) => alpha($accent, 0.2)});
`;

const RoleCard = styled(motion.article)<{ $accent: string }>`
  position: relative;
  padding: 20px 24px;
  border-radius: ${radius.md};
  background: var(--surface);
  border: 1px solid ${color.border};
  backdrop-filter: blur(12px);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: ${({ $accent }) => alpha($accent, 0.5)};
    box-shadow: 0 16px 40px ${({ $accent }) => alpha($accent, 0.16)};
  }

  /* Timeline node */
  &::before {
    content: "";
    position: absolute;
    left: -24px;
    top: 26px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--bg);
    border: 3px solid ${({ $accent }) => $accent};
    box-shadow: 0 0 0 5px ${({ $accent }) => alpha($accent, 0.18)};
    transform: translateX(-50%);

    ${media.sm} {
      left: -17px;
    }
  }
`;

const RoleTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 6px 16px;
`;

const RoleTitle = styled.h4<{ $accent: string }>`
  font-size: 1.05rem;
  color: ${color.heading};
`;

const Period = styled.span<{ $accent: string }>`
  font-family: ${font.mono};
  font-size: 0.78rem;
  padding: 4px 10px;
  border-radius: ${radius.pill};
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => alpha($accent, 0.1)};
`;

const Meta = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  color: ${color.textMuted};
`;

const Desc = styled.p`
  margin-top: 12px;
  line-height: 1.75;
`;

const Chips = styled.div`
  margin-top: 14px;
`;

const Toggle = styled.div`
  padding-top: 4px;
`;

function RoleItem({ role, accent }: { role: Role; accent: string }) {
  return (
    <RoleCard
      $accent={accent}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ x: 6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      <RoleTop>
        <RoleTitle $accent={accent}>{role.title}</RoleTitle>
        {role.period && <Period $accent={accent}>{role.period}</Period>}
      </RoleTop>
      {role.location && <Meta>{role.location}</Meta>}
      {role.description && <Desc>{role.description}</Desc>}
      {role.skills.length > 0 && (
        <Chips>
          <ChipList items={role.skills} accent={accent} />
        </Chips>
      )}
    </RoleCard>
  );
}

function Group({ group }: { group: ExperienceGroup }) {
  const accent = accentHex[group.accent];
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const always = group.roles.slice(0, VISIBLE_ROLES);
  const extra = group.roles.slice(VISIBLE_ROLES);

  return (
    <div>
      <OrgHeader>
        <OrgIcon $accent={accent}>{group.icon}</OrgIcon>
        <div>
          <OrgName>{group.organization}</OrgName>
          {group.summary && <OrgMeta>{group.summary}</OrgMeta>}
        </div>
      </OrgHeader>

      <Timeline ref={ref}>
        <Track>
          <Progress $accent={accent} style={{ scaleY }} />
        </Track>
        {always.map((role, i) => (
          <RoleItem key={`${role.title}-${i}`} role={role} accent={accent} />
        ))}
        <AnimatePresence initial={false}>
          {expanded &&
            extra.map((role, i) => (
              <motion.div
                key={`${role.title}-${i}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.45, ease: ease.out }}
              >
                <RoleItem role={role} accent={accent} />
              </motion.div>
            ))}
        </AnimatePresence>
        {extra.length > 0 && (
          <Toggle>
            <Button size="sm" variant="subtle" onClick={() => setExpanded((e) => !e)} aria-expanded={expanded}>
              {expanded ? "Show less" : `Show ${extra.length} more role${extra.length > 1 ? "s" : ""}`}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} style={{ display: "grid" }}>
                <Icon name="chevronDown" />
              </motion.span>
            </Button>
          </Toggle>
        )}
      </Timeline>
    </div>
  );
}

export function Experience({ config, index }: SectionProps) {
  const { experience } = useContent();

  return (
    <Section id={config.id} index={index} title={config.title} subtitle={config.subtitle}>
      <Groups>
        {experience.map((group, i) => (
          <Group key={`${group.organization}-${i}`} group={group} />
        ))}
      </Groups>
    </Section>
  );
}
