import React from "react";
import styled from "styled-components";
import resumeFile from "../../assets/AbtinBadie_CV_Website.pdf";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: #ffffff;
  text-align: center;
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
  color: #333;
  margin-bottom: 24px;
`;

const SectionParagraph = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #666;
`;

const DownloadButton = styled.a`
  background-color: #007bff;
  color: #fff;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);

  &:hover {
    background-color: #0056b3;
  }
`;

const Resume = () => {
  return (
    <SectionContainer id="resume">
      <SectionWrapper>
        <SectionTitle>My Resume</SectionTitle>
        <SectionParagraph>
          Feel free to download my resume for a more detailed look at my skills,
          experience, and academic background.
        </SectionParagraph>
        <DownloadButton
          // 2. Use the imported variable as the href
          href={resumeFile}
          download="Abtin_Badie_CV.pdf" // This sets the downloaded file's name
        >
          Download Resume
        </DownloadButton>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Resume;
