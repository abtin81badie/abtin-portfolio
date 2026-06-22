import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroContainer = styled.div`
  background: ${theme.heroGradient};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Blob = styled.div<{ $top: string; $left: string; $color: string; $delay: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 340px;
  height: 340px;
  background: ${({ $color }) => $color};
  filter: blur(90px);
  opacity: 0.45;
  border-radius: 50%;
  animation: ${float} 9s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeUp} 0.8s ease both;
`;

const Eyebrow = styled.span`
  display: inline-block;
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.08);
  color: #e7e9ff;
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-bottom: 26px;
  backdrop-filter: blur(6px);
`;

const HeroH1 = styled.h1`
  font-size: 64px;
  line-height: 1.05;
  background: linear-gradient(120deg, #ffffff 30%, #c7b6ff 70%, #ffb6e6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    font-size: 46px;
  }
  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroP = styled.p`
  margin-top: 18px;
  color: #c9cdf0;
  font-size: 22px;
  max-width: 620px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
`;

const ContactLink = styled.a<{ $solid?: boolean }>`
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: ${({ $solid }) => ($solid ? theme.gradient : "rgba(255,255,255,0.08)")};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ $solid }) => ($solid ? "0 10px 24px rgba(236,72,153,0.35)" : "none")};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 28px rgba(99, 102, 241, 0.4);
  }
`;

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <Blob $top="-60px" $left="-40px" $color={theme.colors.primary} $delay="0s" />
      <Blob $top="40%" $left="78%" $color={theme.colors.pink} $delay="1.5s" />
      <Blob $top="70%" $left="20%" $color={theme.colors.cyan} $delay="3s" />
      <HeroContent>
        <Eyebrow>👋 Computer Engineer · AI / Deep Learning</Eyebrow>
        <HeroH1>Abtin Badie</HeroH1>
        <HeroP>
          B.Sc. Computer Engineering @ IUST. I build end-to-end AI systems —
          from deep learning research to production-ready full-stack apps.
        </HeroP>
        <ContactInfo>
          <ContactLink $solid href="mailto:abtinbadie81@gmail.com">
            ✉️ Email
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/abtin-badie-262690234/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in LinkedIn
          </ContactLink>
          <ContactLink
            href="https://github.com/abtin81badie"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⌥ GitHub
          </ContactLink>
          <ContactLink
            href="https://t.me/Abtin_003"
            target="_blank"
            rel="noopener noreferrer"
          >
            ✈️ Telegram
          </ContactLink>
        </ContactInfo>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
