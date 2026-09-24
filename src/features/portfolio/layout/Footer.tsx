import { motion } from "framer-motion";
import styled from "styled-components";
import { color, font } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";
import { Container } from "../../../ui/Section";
import { useContent } from "../ContentContext";
import { SocialLinks } from "./SocialLinks";

const Wrapper = styled.footer`
  position: relative;
  padding: 56px 0 40px;
  border-top: 1px solid ${color.border};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-family: ${font.display};
    font-size: 1.25rem;
    color: ${color.heading};
  }

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    color: ${color.textMuted};
  }
`;

const Bottom = styled.p`
  margin-top: 36px;
  font-size: 0.85rem;
  color: ${color.textMuted};
  text-align: center;
`;

export function Footer() {
  const { profile, socials } = useContent();
  return (
    <Wrapper>
      <Container>
        <Row>
          <Brand>
            <strong>{profile.name}</strong>
            {profile.location && (
              <span>
                <Icon name="pin" size={15} />
                {profile.location}
              </span>
            )}
          </Brand>
          <SocialLinks links={socials} />
        </Row>
        <Bottom>
          © {new Date().getFullYear()} {profile.name}. Crafted with React, TypeScript &{" "}
          <motion.span
            style={{ display: "inline-block" }}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }}
          >
            ♥
          </motion.span>
        </Bottom>
      </Container>
    </Wrapper>
  );
}
