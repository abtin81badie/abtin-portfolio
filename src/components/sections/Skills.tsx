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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 26px;
`;

const SkillCategory = styled.div<{ $accent: string }>`
  background: ${theme.colors.card};
  padding: 26px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  border-top: 4px solid ${({ $accent }) => $accent};
  box-shadow: ${theme.shadow};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadowHover};
  }
`;

const CategoryTitle = styled.h3<{ $accent: string }>`
  font-size: 1.3rem;
  color: ${({ $accent }) => $accent};
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

const Chip = styled.span<{ $accent: string }>`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 7px 13px;
  border-radius: 999px;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}14`};
  border: 1px solid ${({ $accent }) => `${$accent}33`};
`;

const skillsData: { title: string; icon: string; accent: string; skills: string[] }[] = [
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    accent: theme.colors.primary,
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "LangChain",
      "Hugging Face",
      "NumPy",
      "Pandas",
      "Deep Learning",
      "CNNs",
      "RNNs / LSTMs",
      "Transformers",
      "LLMs",
      "NLP",
      "Computer Vision",
      "PEFT / LoRA",
    ],
  },
  {
    title: "Web & Programming",
    icon: "💻",
    accent: theme.colors.pink,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "SQL",
      "C / C++",
      "FastAPI",
      "Django",
      "Fiber (Go)",
      "GORM",
      "React",
      "HTML5",
      "CSS3",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "DevOps, Tools & Professional",
    icon: "⚙️",
    accent: theme.colors.cyan,
    skills: [
      "Git",
      "Docker",
      "Linux",
      "Bash",
      "CI/CD",
      "Android",
      "Kotlin",
      "Teamwork",
      "Team Leadership",
    ],
  },
];

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionWrapper>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {skillsData.map((cat) => (
            <SkillCategory key={cat.title} $accent={cat.accent}>
              <CategoryTitle $accent={cat.accent}>
                <span>{cat.icon}</span>
                {cat.title}
              </CategoryTitle>
              <ChipWrap>
                {cat.skills.map((skill) => (
                  <Chip key={skill} $accent={cat.accent}>
                    {skill}
                  </Chip>
                ))}
              </ChipWrap>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Skills;
