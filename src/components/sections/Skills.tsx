import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: #ffffff;
`;

const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const SkillCategory = styled.div`
  background: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const skillsData = {
  "AI & Machine Learning": [
    "Frameworks/Libraries: TensorFlow, PyTorch, Keras, LangChain, Scikit-learn, NumPy, Pandas",
    "Core Concepts: Deep Learning (CNNs, RNNs, Transformers), LLMs, Natural Language Processing (NLP), Computer Vision",
  ],
  "Web Development & Programming": [
    "Languages: Python, JavaScript, TypeScript, Go, SQL, C/C++",
    "Backend: FastAPI, Django, Fiber (Go), GORM",
    "Frontend: React, HTML5, CSS3",
    "Databases: PostgreSQL, MySQL",
  ],
  "DevOps, Tools & Professional": [
    "Tools & Platforms: Git, Docker, Linux, Bash, CI/CD",
    "Mobile Development: Android, Kotlin",
    "Professional Skills: Teamwork, Team Leadership",
  ],
};

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionWrapper>
        <SectionTitle>Skills</SectionTitle>
        <SkillsGrid>
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory key={category}>
              <CategoryTitle>{category}</CategoryTitle>
              <SkillList>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Skills;
