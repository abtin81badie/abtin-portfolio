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

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 26px;
`;

const InterestCard = styled.div<{ $accent: string }>`
  background: ${theme.colors.card};
  padding: 26px;
  border-radius: ${theme.radius};
  border: 1px solid ${theme.colors.border};
  box-shadow: ${theme.shadow};
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 5px;
    background: ${({ $accent }) => $accent};
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadowHover};
  }
`;

const InterestTitle = styled.h3<{ $accent: string }>`
  font-size: 1.25rem;
  color: ${({ $accent }) => $accent};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SubfieldList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SubfieldItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1.5;
  color: ${theme.colors.text};
  padding-left: 18px;
  position: relative;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${theme.colors.violet};
  }
`;

const interests = [
  {
    title: "Deep Learning",
    icon: "🔬",
    items: [
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs) & LSTMs",
      "Transformer Architectures",
    ],
  },
  {
    title: "Machine Learning",
    icon: "📊",
    items: [
      "Classical Algorithms (Decision Trees, SVMs)",
      "Genetic Algorithms",
      "Reinforcement Learning",
    ],
  },
  {
    title: "Natural Language Processing",
    icon: "💬",
    items: ["Medical NLP & Report Generation", "Agentic Workflows & Tool Use"],
  },
  {
    title: "Large Language Models",
    icon: "🤖",
    items: ["Fine-tuning & Model Specialization", "Autonomous Agent Systems"],
  },
  {
    title: "Computer Vision",
    icon: "👁️",
    items: [
      "Medical Image Captioning",
      "Multimodal Learning (Video-Text Retrieval)",
    ],
  },
];

const ResearchInterests = () => {
  return (
    <SectionContainer id="researchinterests">
      <SectionWrapper>
        <SectionTitle>Research Interests</SectionTitle>
        <InterestsGrid>
          {interests.map((cat, idx) => {
            const accent = theme.accents[idx % theme.accents.length];
            return (
              <InterestCard key={cat.title} $accent={accent}>
                <InterestTitle $accent={accent}>
                  <span>{cat.icon}</span>
                  {cat.title}
                </InterestTitle>
                <SubfieldList>
                  {cat.items.map((subfield) => (
                    <SubfieldItem key={subfield}>{subfield}</SubfieldItem>
                  ))}
                </SubfieldList>
              </InterestCard>
            );
          })}
        </InterestsGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default ResearchInterests;
