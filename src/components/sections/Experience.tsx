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

const ExperienceCard = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
`;

const JobDuration = styled.p`
  font-style: italic;
  color: #666;
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 20px;
`;

const ResponsibilitiesList = styled.ul`
  list-style-position: inside;
  padding-left: 10px;
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "IUST Natural Language Processing Lab",
    duration: "June 2024 - Present",
    responsibilities: [
      "Conducting thesis research on Medical Image Captioning to generate automated medical reports from images.",
      "Investigating methods to enhance LLM performance in specialized domains under Dr. Sauleh Etemadi's supervision.",
      "Designed and built an autonomous agent system using LLMs for complex task execution.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TAPSI",
    duration: "Feb 2025 - Jun 2025",
    responsibilities: [
      "Developed the Minimum Viable Product (MVP) for TAPSI-Service, a new platform for on-demand home repair and utility services.",
      "Built a scalable back-end architecture as a member of the system design team using Python, FastAPI, and PostgreSQL.",
    ],
  },
];

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <SectionWrapper>
        <SectionTitle>Experience</SectionTitle>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <ExperienceHeader>
              <JobTitle>{exp.title}</JobTitle>
              <JobDuration>{exp.duration}</JobDuration>
            </ExperienceHeader>
            <CompanyName>{exp.company}</CompanyName>
            <ResponsibilitiesList>
              {exp.responsibilities.map((item, i) => (
                <ResponsibilityItem key={i}>{item}</ResponsibilityItem>
              ))}
            </ResponsibilitiesList>
          </ExperienceCard>
        ))}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Experience;
