import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 100px 0;
  background: #f4f7f9;
`;

const SectionWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 64px;
  text-align: center;
`;

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const InterestCard = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const InterestTitle = styled.h3`
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

const SubfieldList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SubfieldItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const interests = {
  "Deep Learning": [
    "Convolutional Neural Networks (CNNs)",
    "Recurrent Neural Networks (RNNs) & LSTMs",
    "Transformer Architectures",
  ],
  "Machine Learning": [
    "Classical Algorithms (Decision Trees, SVMs)",
    "Genetic Algorithms",
    "Reinforcement Learning",
  ],
  "Natural Language Processing (NLP)": [
    "Medical NLP & Report Generation",
    "Agentic Workflows & Tool Use",
  ],
  "Large Language Models (LLMs)": [
    "Fine-tuning & Model Specialization",
    "Autonomous Agent Systems",
  ],
  "Computer Vision": [
    "Medical Image Captioning",
    "Multimodal Learning (Video-Text Retrieval)",
  ],
};

const ResearchInterests = () => {
  return (
    <SectionContainer id="researchinterests">
      <SectionWrapper>
        <SectionTitle>Research Interests</SectionTitle>
        <InterestsGrid>
          {Object.entries(interests).map(([category, subfields]) => (
            <InterestCard key={category}>
              <InterestTitle>{category}</InterestTitle>
              <SubfieldList>
                {/* This line is now simplified to remove the error */}
                {subfields.map((subfield, index) => (
                  <SubfieldItem key={index}>{subfield}</SubfieldItem>
                ))}
              </SubfieldList>
            </InterestCard>
          ))}
        </InterestsGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default ResearchInterests;
