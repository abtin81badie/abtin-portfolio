import type { ReactNode } from "react";
import styled from "styled-components";
import { color, font, layout, media } from "../theme/tokens";
import { GradientText } from "./GradientText";
import { Reveal } from "./motion";

export const Container = styled.div`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${layout.gutter};
`;

const Wrapper = styled.section<{ $alt?: boolean }>`
  position: relative;
  padding: clamp(80px, 11vw, 128px) 0;
  background: ${({ $alt }) => ($alt ? color.bgElevated : "transparent")};
  transition: background-color 0.4s ease;
`;

const Header = styled.header<{ $align: "left" | "center" }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ $align }) => ($align === "center" ? "center" : "flex-start")};
  text-align: ${({ $align }) => $align};
  gap: 12px;
  margin-bottom: clamp(40px, 6vw, 64px);

  ${media.md} {
    align-items: flex-start;
    text-align: left;
  }
`;

const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ${font.mono};
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${color.primary};

  &::after {
    content: "";
    width: 36px;
    height: 1px;
    background: currentColor;
    opacity: 0.6;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 4.6vw, 3.1rem);
  font-weight: 700;
`;

const Subtitle = styled.p`
  max-width: 620px;
  font-size: 1.05rem;
  color: ${color.textMuted};
`;

interface SectionProps {
  id: string;
  index: number;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Alternating background; defaults to every other section. */
  alt?: boolean;
  children: ReactNode;
}

/** Standard page section: anchor, numbered eyebrow, animated title, content. */
export function Section({ id, index, title, subtitle, align = "left", alt, children }: SectionProps) {
  return (
    <Wrapper id={id} $alt={alt ?? index % 2 === 1} aria-labelledby={`${id}-title`}>
      <Container>
        <Reveal>
          <Header $align={align}>
            <Eyebrow>{String(index + 1).padStart(2, "0")} / {id}</Eyebrow>
            <Title id={`${id}-title`}>
              <GradientText>{title}</GradientText>
            </Title>
            {subtitle && <Subtitle>{subtitle}</Subtitle>}
          </Header>
        </Reveal>
        {children}
      </Container>
    </Wrapper>
  );
}
