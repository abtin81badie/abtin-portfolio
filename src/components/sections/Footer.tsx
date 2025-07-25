import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #0c0c0c;
  padding: 40px 0;
  color: #fff;
`;

const FooterWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 15px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialLinks>
          <SocialLink
            href="https://github.com/abtin81badie"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </SocialLink>
          <SocialLink href="mailto:abtinbadie81@gmail.com">Email</SocialLink>
        </SocialLinks>
        <FooterText>
          © {new Date().getFullYear()} Abtin Badiee. All rights reserved.
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
