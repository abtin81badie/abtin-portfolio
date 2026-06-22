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
  display: flex;
  flex-direction: column;
  align-items: center;
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

const EducationCard = styled.div`
  background: ${theme.colors.card};
  padding: 34px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  border-left: 5px solid ${theme.colors.primary};
  box-shadow: ${theme.shadow};
  max-width: 820px;
  width: 100%;
  text-align: left;
`;

const UniversityName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: ${theme.colors.primary};
`;

const DegreeInfo = styled.p`
  font-size: 1.15rem;
  margin-bottom: 8px;
  color: ${theme.colors.text};
`;

const ChipWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
`;

const Chip = styled.span<{ $accent: string }>`
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 999px;
  color: ${({ $accent }) => $accent};
  background: ${({ $accent }) => `${$accent}14`};
  border: 1px solid ${({ $accent }) => `${$accent}33`};
`;

const courseworkSkills = [
  "C#",
  "C++",
  "Algorithms",
  "Data Structures",
  "Operating Systems",
  "AI",
  "Machine Learning",
  "+11 skills",
];

const Education = () => {
  return (
    <SectionContainer id="education">
      <SectionWrapper>
        <SectionTitle>Education</SectionTitle>
        <EducationCard>
          <UniversityName>
            Iran University of Science and Technology (IUST)
          </UniversityName>
          <DegreeInfo>
            <strong>B.Sc. Computer Engineering</strong>
          </DegreeInfo>
          <DegreeInfo>
            <strong>Duration:</strong> Aug 2021 – Feb 2026
          </DegreeInfo>
          <DegreeInfo>
            <strong>Grade:</strong> 18.80 / 20 (≈ 3.95 / 4)
          </DegreeInfo>
          <ChipWrap>
            {courseworkSkills.map((skill, i) => (
              <Chip key={skill} $accent={theme.accents[i % theme.accents.length]}>
                {skill}
              </Chip>
            ))}
          </ChipWrap>
        </EducationCard>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Education;
