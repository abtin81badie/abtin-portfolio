import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const ContactLink = styled.a`
  color: #fff;
  font-size: 16px;
  margin: 0 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 480px) {
    margin: 10px 0;
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg />
      <HeroContent>
        <HeroH1>Abtin Badie</HeroH1>
        <HeroP>Computer Engineer</HeroP>
        <ContactInfo>
          <ContactLink href="mailto:abtinbadie81@gmail.com">
            abtinbadie81@gmail.com
          </ContactLink>
          <ContactLink
            href="https://github.com/abtin81badie"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </ContactLink>
        </ContactInfo>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
