import React from "react";
import styled from "styled-components";
import profileImage from "../../assets/profile.jpg";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: #ffffff;
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  justify-self: center;
`;

const AboutTextWrapper = styled.div`
  color: #333;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 24px;
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const ContactLink = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const AboutMe = () => {
  return (
    <SectionContainer id="aboutme">
      <SectionWrapper>
        <ProfilePhoto src={profileImage} alt="Abtin Badiee" />
        <AboutTextWrapper>
          <SectionTitle>About Me</SectionTitle>
          <AboutParagraph>
            As a passionate Computer Engineer, I am driven by a deep-seated
            curiosity for technology and a love for continuous learning. I
            thrive on tackling new challenges and embracing novel experiences,
            both in my academic pursuits and personal life.
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
