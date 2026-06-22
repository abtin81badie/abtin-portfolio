import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import resumeFile from "../../assets/AbtinBadie_CV_Website.pdf";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: ${theme.colors.bgAlt};
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
  margin-bottom: 24px;
  background: ${theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionParagraph = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #666;
`;

const DownloadButton = styled.a`
  background: ${theme.gradient};
  color: #fff;
  padding: 15px 34px;
  border-radius: 50px;
  font-size: 1.15rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 10px 24px rgba(236, 72, 153, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(99, 102, 241, 0.4);
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
