// src/components/sections/Education.tsx
import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: #ffffff;
`;

const SectionWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
  text-align: center;
`;

const EducationCard = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  text-align: left;
`;

const UniversityName = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #007bff;
`;

const DegreeInfo = styled.p`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

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
            <strong>Expected Graduation:</strong> Fall 2025
          </DegreeInfo>
          <DegreeInfo>
            <strong>GPA:</strong> 18.87/20 (3.99/4)
          </DegreeInfo>
        </EducationCard>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Education;
