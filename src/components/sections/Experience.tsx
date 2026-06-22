import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: ${theme.colors.bgAlt};
`;

const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 64px;
  text-align: center;
  background: ${theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Group = styled.div`
  margin-bottom: 44px;
`;

const OrgHeader = styled.div<{ $accent: string }>`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
`;

const OrgIcon = styled.div<{ $accent: string }>`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  color: #fff;
  background: ${({ $accent }) => $accent};
  box-shadow: 0 6px 16px ${({ $accent }) => `${$accent}55`};
`;

const OrgName = styled.h3`
  font-size: 1.4rem;
  color: ${theme.colors.heading};
`;

const OrgMeta = styled.span`
  display: block;
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  margin-top: 2px;
`;

const Timeline = styled.div<{ $accent: string }>`
  position: relative;
  margin-left: 24px;
  padding-left: 34px;
  border-left: 2px solid ${({ $accent }) => `${$accent}33`};
`;

const RoleCard = styled.div<{ $accent: string }>`
  position: relative;
  background: ${theme.colors.bg};
  border: 1px solid ${theme.colors.border};
  border-radius: 14px;
  padding: 20px 24px;
  margin-bottom: 18px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: -42px;
    top: 24px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${({ $accent }) => $accent};
    border: 3px solid ${theme.colors.bgAlt};
  }

  &:hover {
    transform: translateX(4px);
    box-shadow: ${theme.shadow};
  }
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px 16px;
`;

const RoleTitle = styled.h4<{ $accent: string }>`
  font-size: 1.15rem;
  color: ${({ $accent }) => $accent};
`;

const RoleDuration = styled.span`
  font-size: 0.88rem;
  color: ${theme.colors.textMuted};
  font-style: italic;
  white-space: nowrap;
`;

const RoleMeta = styled.p`
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  margin-top: 6px;
`;

const RoleDesc = styled.p`
  font-size: 0.98rem;
  line-height: 1.65;
  color: ${theme.colors.text};
  margin-top: 10px;
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const Chip = styled.span<{ $accent: string }>`
  font-size: 0.78rem;
  font-weight: 600;
  padding: 5px 11px;
  border-radius: 999px;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}14`};
  border: 1px solid ${({ $accent }) => `${$accent}33`};
`;

type Role = {
  title: string;
  duration: string;
  meta?: string;
  desc?: string;
  skills?: string[];
};

type OrgGroup = {
  org: string;
  icon: string;
  meta?: string;
  accent: string;
  roles: Role[];
};

const groups: OrgGroup[] = [
  {
    org: "Namava",
    icon: "🎬",
    meta: "Full-time · 10 mos",
    accent: theme.colors.primary,
    roles: [
      {
        title: "Back End Developer",
        duration: "Jan 2026 – Present · 6 mos",
        meta: "Remote",
        skills: ["C#", ".NET", "REST APIs", "+12 skills"],
      },
      {
        title: "Back End Developer Intern",
        duration: "Sep 2025 – Jan 2026 · 5 mos",
        meta: "Tehran, Iran",
      },
    ],
  },
  {
    org: "Natural Language Processing Lab — IUST",
    icon: "🧪",
    accent: theme.colors.pink,
    roles: [
      {
        title: "Research Assistant",
        duration: "Jun 2024 – Feb 2026 · 1 yr 9 mos",
        meta: "Under the supervision of Dr. Sauleh Eetemadi",
        desc: "Conducting research in medical AI and applied NLP — including my undergraduate thesis (NeoScan, non-invasive neonatal jaundice detection) and work on enhancing LLM performance in specialized domains and autonomous agent systems.",
        skills: ["LLMs", "NLP", "PyTorch", "+13 skills"],
      },
    ],
  },
  {
    org: "TAPSI",
    icon: "🚖",
    accent: theme.colors.emerald,
    roles: [
      {
        title: "Software Engineer · Internship",
        duration: "Feb 2025 – Jun 2025 · 5 mos",
        meta: "Tehran, Iran · Hybrid",
        desc: "Built the MVP for TAPSI-Service, a new platform for on-demand home repair and utility services, as part of the system-design team — designing a scalable back-end with Python, FastAPI and PostgreSQL.",
        skills: ["Python", "Software Infrastructure", "+3 skills"],
      },
    ],
  },
  {
    org: "Iran University of Science and Technology — Teaching",
    icon: "🎓",
    accent: theme.colors.cyan,
    roles: [
      {
        title: "Head Teaching Assistant — Operating Systems",
        duration: "Sep 2025 – Feb 2026 · 6 mos",
        meta: "Instructors: Dr. Entezari-Maleki & Dr. Azhari",
        skills: ["C", "Team Leadership", "+3 skills"],
      },
      {
        title: "Head Teaching Assistant — Theory of Languages & Automata",
        duration: "Feb 2025 – Aug 2025 · 7 mos",
        meta: "Instructors: Dr. Entezari-Maleki & Dr. Ghayour Baghbani",
        skills: ["Teamwork", "Team Leadership"],
      },
      {
        title: "Teaching Assistant — Artificial Intelligence",
        duration: "Sep 2024 – Jan 2025 · 5 mos",
        meta: "Instructor: Dr. Arash Abdi Hejrandoost",
        skills: ["Teamwork"],
      },
      {
        title: "Teaching Assistant — Discrete Mathematics",
        duration: "Feb 2024 – Jun 2024 · 5 mos",
        meta: "Instructor: Dr. Vesal Hakami",
      },
      {
        title: "Teaching Assistant — Designing Digital Computer Systems",
        duration: "Feb 2024 – Jun 2024 · 5 mos",
        meta: "Instructor: Dr. Hakem Beitollahi",
      },
      {
        title: "Teaching Assistant — Advanced Programming",
        duration: "Feb 2024 – Jun 2024 · 5 mos",
        meta: "Instructor: Dr. MalekiMajd",
      },
      {
        title: "Teaching Assistant — Fundamental Programming",
        duration: "Sep 2023 – Jan 2024 · 5 mos",
        meta: "Instructor: Dr. MalekiMajd",
      },
      {
        title: "Teaching Assistant — Logical Circuits",
        duration: "Sep 2023 – Jan 2024 · 5 mos",
        meta: "Instructor: Dr. Kashi",
      },
    ],
  },
];

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <SectionWrapper>
        <SectionTitle>Experience</SectionTitle>
        {groups.map((group) => (
          <Group key={group.org}>
            <OrgHeader $accent={group.accent}>
              <OrgIcon $accent={group.accent}>{group.icon}</OrgIcon>
              <div>
                <OrgName>{group.org}</OrgName>
                {group.meta && <OrgMeta>{group.meta}</OrgMeta>}
              </div>
            </OrgHeader>
            <Timeline $accent={group.accent}>
              {group.roles.map((role) => (
                <RoleCard key={role.title} $accent={group.accent}>
                  <RoleHeader>
                    <RoleTitle $accent={group.accent}>{role.title}</RoleTitle>
                    <RoleDuration>{role.duration}</RoleDuration>
                  </RoleHeader>
                  {role.meta && <RoleMeta>{role.meta}</RoleMeta>}
                  {role.desc && <RoleDesc>{role.desc}</RoleDesc>}
                  {role.skills && (
                    <ChipWrap>
                      {role.skills.map((skill) => (
                        <Chip key={skill} $accent={group.accent}>
                          {skill}
                        </Chip>
                      ))}
                    </ChipWrap>
                  )}
                </RoleCard>
              ))}
            </Timeline>
          </Group>
        ))}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Experience;
