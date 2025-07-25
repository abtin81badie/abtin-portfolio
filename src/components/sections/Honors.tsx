// src/components/sections/Honors.tsx
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

const HonorsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HonorItem = styled.li`
  background: #ffffff;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const HonorTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const HonorYear = styled.span`
  display: block;
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
`;

const Honors = () => {
  return (
    <SectionContainer id="honors">
      <SectionWrapper>
        <SectionTitle>Honors and Awards</SectionTitle>
        <HonorsList>
          <HonorItem>
            <HonorTitle>Ranked 2nd among first-year cohorts</HonorTitle>
            <HonorYear>
              2022 - Iran University of Science and Technology
            </HonorYear>
          </HonorItem>
          <HonorItem>
            <HonorTitle>Ranked 1st for academic achievement</HonorTitle>
            <HonorYear>
              2018, 2019, 2021 - Tohid High School and Ehsan School
            </HonorYear>
          </HonorItem>
        </HonorsList>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Honors;
