import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: ${theme.colors.bg};
`;

const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 64px;
  text-align: center;
  background: ${theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HonorsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  gap: 18px;
`;

const HonorItem = styled.li<{ $accent: string }>`
  background: ${theme.colors.card};
  padding: 22px 24px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  border-left: 5px solid ${({ $accent }) => $accent};
  box-shadow: ${theme.shadow};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: ${theme.shadowHover};
  }
`;

const Medal = styled.span`
  font-size: 1.8rem;
  line-height: 1;
`;

const HonorTitle = styled.h3`
  font-size: 1.15rem;
  color: ${theme.colors.heading};
`;

const HonorYear = styled.span`
  display: block;
  font-size: 0.95rem;
  color: ${theme.colors.textMuted};
  margin-top: 5px;
`;

const honors = [
  {
    medal: "🥇",
    title: "Top 10% Undergraduate Student",
    detail: "Iran University of Science and Technology (Present)",
  },
  {
    medal: "🥈",
    title: "Ranked 2nd among first-year cohorts",
    detail: "2022 — Iran University of Science and Technology",
  },
  {
    medal: "🏅",
    title: "Ranked 1st for academic achievement",
    detail: "2018, 2019, 2021 — Tohid High School and Ehsan School",
  },
];

const Honors = () => {
  return (
    <SectionContainer id="honors">
      <SectionWrapper>
        <SectionTitle>Honors and Awards</SectionTitle>
        <HonorsList>
          {honors.map((honor, i) => (
            <HonorItem key={honor.title} $accent={theme.accents[i % theme.accents.length]}>
              <Medal>{honor.medal}</Medal>
              <div>
                <HonorTitle>{honor.title}</HonorTitle>
                <HonorYear>{honor.detail}</HonorYear>
              </div>
            </HonorItem>
          ))}
        </HonorsList>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Honors;
