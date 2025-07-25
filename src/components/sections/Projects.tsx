// src/components/sections/Projects.tsx
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const TechList = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: #666;
  margin-top: 20px;
`;

const projects = [
  {
    title: "Persian Video Understanding: Fine-Tuning CLIP & CLIP4Clip",
    description:
      "Adapted CLIP and CLIP4Clip models for Persian by fine-tuning on the MSR-VTT dataset with 10,000 translated captions, enabling bilingual video-text retrieval.",
    tech: "Multimodal Learning, PyTorch, Video-Text Retrieval",
  },
  {
    title: "Image Classification DSL: A Language for Deep Learning",
    description:
      "Developed a Domain-Specific Language (DSL) using ANTLR4 and Python to simplify image classification, allowing non-programmers to define models with intuitive syntax.",
    tech: "Domain-Specific Languages, ANTLR4, Python, TensorFlow",
  },
  {
    title: "Deep Learning Course Workshops",
    description:
      "Created a repository of hands-on workshops covering NumPy, Pandas, and PyTorch fundamentals, including tensor operations with GPU acceleration.",
    tech: "PyTorch, CNNs, RNNs, LSTMs, Transformers",
  },
  {
    title: "Artificial Intelligence Course Projects",
    description:
      "Implemented classical ML algorithms from scratch, including Decision Trees for fraud detection, SVMs for text classification, and a Genetic Algorithm for clustering.",
    tech: "Python, TensorFlow, Keras, Reinforcement Learning",
  },
];

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <SectionWrapper>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid>
          {projects.map((proj, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{proj.title}</ProjectTitle>
              <ProjectDescription>{proj.description}</ProjectDescription>
              <TechList>
                <strong>Technologies:</strong> {proj.tech}
              </TechList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default Projects;
