import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: ${theme.colors.bg};
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 22px;
`;

const Card = styled.div<{ $accent: string }>`
  background: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  border-top: 4px solid ${({ $accent }) => $accent};
  border-radius: ${theme.radius};
  padding: 24px;
  box-shadow: ${theme.shadow};
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadowHover};
  }
`;

const CertHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Issuer = styled.span<{ $accent: string }>`
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: ${({ $accent }) => $accent};
`;

const CertTitle = styled.h3`
  font-size: 1.1rem;
  color: ${theme.colors.heading};
  line-height: 1.4;
  margin-bottom: 10px;
  flex-grow: 1;
`;

const CertDate = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
`;

const CredId = styled.p`
  font-size: 0.78rem;
  color: ${theme.colors.textMuted};
  font-family: monospace;
  margin-top: 4px;
  word-break: break-all;
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 14px;
`;

const Chip = styled.span<{ $accent: string }>`
  font-size: 0.74rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}14`};
  border: 1px solid ${({ $accent }) => `${$accent}33`};
`;

type Cert = {
  title: string;
  issuer: string;
  icon: string;
  date: string;
  credId?: string;
  skills?: string[];
};

const certs: Cert[] = [
  {
    title: "MongoDB C# Developer Path",
    issuer: "MongoDB",
    icon: "🍃",
    date: "Issued Dec 2025",
    credId: "MDB6j59sdww3t",
  },
  {
    title: "Redis for .NET Developers",
    issuer: "Redis",
    icon: "🟥",
    date: "Issued Nov 2025",
    credId: "vwxbze8cue8znv",
  },
  {
    title: "1st LLM-Agents Hackathon (In Person)",
    issuer: "Sharif Artificial Intelligence Chapter",
    icon: "🏆",
    date: "Issued Jul 2025",
  },
  {
    title: "Task-Oriented Bootcamp in Software Engineering with Golang",
    issuer: "Quera",
    icon: "🐹",
    date: "Issued Jan 2025",
    credId: "kIQzwH4J",
    skills: ["HTTP", "Testing", "+21 skills"],
  },
  {
    title: "Professional Project-Oriented Course in Machine Learning with Python",
    issuer: "Quera",
    icon: "🤖",
    date: "Issued Dec 2024",
    credId: "mVJmmbkV",
    skills: ["NumPy", "Machine Learning", "+4 skills"],
  },
  {
    title: "Advanced Algorithmic Thinking and Data Structures",
    issuer: "Quera",
    icon: "🧩",
    date: "Issued Dec 2024",
    credId: "1DeaFNu7",
    skills: ["Algorithms", "C++", "+4 skills"],
  },
  {
    title: "Professional Project-Oriented Course in Frontend Development with React",
    issuer: "Quera",
    icon: "⚛️",
    date: "Issued Dec 2024",
    credId: "xi8WxBbA",
    skills: ["React.js", "HTML", "+4 skills"],
  },
  {
    title: "Professional Project-Oriented Course in Backend Development with Django",
    issuer: "Quera",
    icon: "🌿",
    date: "Issued Oct 2024",
    credId: "Y4b6ahSU",
    skills: ["Templates", "Application Migrations", "+8 skills"],
  },
  {
    title: "Project-Oriented Course in Front-End Web Development",
    issuer: "Quera",
    icon: "🎨",
    date: "Issued Aug 2024",
    credId: "77s2N0Es",
  },
  {
    title: "Data Structures",
    issuer: "University of California San Diego",
    icon: "🎓",
    date: "Issued Dec 2023",
    credId: "8YWZLPWP3T9T",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "University of California San Diego",
    icon: "🎓",
    date: "Issued Nov 2023",
    credId: "A9RYCC7SVY9N",
  },
];

const Certifications = () => {
  return (
    <SectionContainer id="certifications">
      <SectionWrapper>
        <SectionTitle>Licenses &amp; Certifications</SectionTitle>
        <Grid>
          {certs.map((cert, i) => {
            const accent = theme.accents[i % theme.accents.length];
            return (
              <Card key={cert.title} $accent={accent}>
                <CertHeader>
                  <span>{cert.icon}</span>
                  <Issuer $accent={accent}>{cert.issuer}</Issuer>
                </CertHeader>
                <CertTitle>{cert.title}</CertTitle>
                <CertDate>{cert.date}</CertDate>
                {cert.credId && <CredId>Credential ID: {cert.credId}</CredId>}
                {cert.skills && (
                  <ChipWrap>
                    {cert.skills.map((skill) => (
                      <Chip key={skill} $accent={accent}>
                        {skill}
                      </Chip>
                    ))}
                  </ChipWrap>
                )}
              </Card>
            );
          })}
        </Grid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Certifications;
