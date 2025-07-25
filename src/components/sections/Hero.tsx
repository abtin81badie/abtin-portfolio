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
        [cite_start]<HeroH1>Abtin Badiee [cite: 1]</HeroH1>
        [cite_start]<HeroP>Computer Engineer [cite: 1]</HeroP>
        <ContactInfo>
          [cite_start]
          <ContactLink href="mailto:abtinbadie81@gmail.com">
            abtinbadie81@gmail.com [cite: 1]
          </ContactLink>
          [cite_start]
          <ContactLink href="tel:+989175688603">
            (+98) 917-568-8603 [cite: 1]
          </ContactLink>
          [cite_start]
          <ContactLink
            href="https://github.com/abtin81badie"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub [cite: 1]
          </ContactLink>
        </ContactInfo>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
