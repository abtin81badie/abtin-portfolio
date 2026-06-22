import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import profileImage from "../../assets/profile.jpg";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: ${theme.colors.bg};
`;

const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfilePhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  justify-self: center;
  padding: 6px;
  background: ${theme.gradient};
  box-shadow: 0 14px 34px rgba(99, 102, 241, 0.3);
`;

const AboutTextWrapper = styled.div`
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 24px;
  background: ${theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const ContactLink = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  color: ${theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.pink};
    text-decoration: underline;
  }
`;

const AboutMe = () => {
  return (
    <SectionContainer id="aboutme">
      <SectionWrapper>
        <ProfilePhoto src={profileImage} alt="Abtin Badie" />
        <AboutTextWrapper>
          <SectionTitle>About Me</SectionTitle>
          <AboutParagraph>
            I'm a final-year Computer Engineering student at IUST who loves
            building things end-to-end — from deep-learning research in our NLP
            Lab to production back-ends as a Back End Developer at Namava. My work
            spans medical AI (my thesis, NeoScan), LLMs &amp; agents, computer
            vision, and full-stack development with Python, Go, C#/.NET and React.
          </AboutParagraph>
          <AboutParagraph>
            Outside of technology, I find balance and inspiration in various
            hobbies. I'm an avid enthusiast of music and cinema, always on the
            lookout for compelling stories in TV series and movies. Staying
            active is important to me, and I make it a point to hit the gym at
            least twice a week. I also have a passion for travel and aspire to
            explore different cultures around the world.
          </AboutParagraph>
          <ContactLink
            href="https://t.me/Abtin_003"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect with me on Telegram
          </ContactLink>
        </AboutTextWrapper>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default AboutMe;
