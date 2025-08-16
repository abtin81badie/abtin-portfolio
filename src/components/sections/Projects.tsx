import React from "react";
import styled from "styled-components";

// SVG for the GitHub icon to avoid external dependencies
const GithubIcon = () => (
  <svg
    height="24px"
    width="24px"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ marginLeft: '10px' }}
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);


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
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const ProjectTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const ProjectTitleLink = styled.a`
  font-size: 1.4rem;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ProjectDetailsList = styled.ul`
  font-size: 1rem;
  line-height: 1.6;
  flex-grow: 1;
  padding-left: 20px;
  margin-top: 10px;
`;

const ProjectDetailItem = styled.li`
  margin-bottom: 10px;
`;

const TechList = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: #666;
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding-top: 15px;
`;

// Updated project data transcribed from your LaTeX file
const projects = [
  {
    title: "IdeYar: Crowdfunding Platform Front-End",
    github: "https://github.com/mosaic-2/IdeYar-front",
    tech: "React, Front-End Development, System Design, UI/UX",
    details: [
      "Led the front-end development and system design for a Kickstarter-inspired web platform, enabling users to create, discover, and fund creative projects.",
      "Architected a scalable and maintainable front-end using React, designing a component-based structure, state management strategy, and RESTful API integration.",
      "Developed key user-facing features, including dynamic project pages, user authentication, profile dashboards, and a streamlined campaign creation process.",
    ],
  },
  {
    title: "Medical Image Captioning with BLIP & Flan-T5",
    github: "https://github.com/abtin81badie/medical-image-captioning",
    tech: "Image Captioning, PyTorch, Hugging Face, BLIP, Flan-T5",
    details: [
      "Engineered a two-stage captioning pipeline using BLIP for initial generation and Flan-T5 for refinement, enhancing caption descriptiveness for radiology images.",
      "Fine-tuned the BLIP model on the ROCOv2 dataset to adapt its vision-language understanding to the specialized medical imaging domain.",
      "Developed an automated evaluation framework using BERTScore and ROUGE-L to rigorously measure the semantic similarity and accuracy of generated captions.",
    ],
  },
  {
    title: "Persian Video Understanding: Fine-Tuning CLIP & CLIP4Clip",
    github: "https://github.com/abtin81badie/Deep-Learning",
    tech: "Multimodal Learning, PyTorch, Video-Text Retrieval",
    details: [
      "Adapted CLIP and CLIP4Clip models for Persian by fine-tuning on the MSR-VTT dataset with 10,000 translated captions, enabling bilingual video-text retrieval.",
      "Implemented multilingual text encoders with custom tokenization and efficient training on an NVIDIA V100 GPU using weighted contrastive loss and dynamic frame sampling.",
      "Achieved 84.1% R@1 accuracy in Persian text-to-video retrieval, outperforming zero-shot baselines, and developed a reusable GitHub framework for multimodal research.",
    ],
  },
  {
    title: "Image Classification DSL: A Language for Deep Learning",
    github: "https://github.com/abtin81badie/Image-DSL",
    tech: "Domain-Specific Languages, ANTLR4, Python, TensorFlow",
    details: [
      "Developed a Domain-Specific Language (DSL) using ANTLR4 and Python to simplify image classification, allowing non-programmers to define models with intuitive syntax.",
      "Designed a custom grammar, built an Abstract Syntax Tree (AST) parser, and created a code generator that produces optimized TensorFlow and Keras models from the DSL.",
      "Reduced model definition code by over 90% and accelerated development time by 10x, enabling rapid, standardized prototyping for ML experimentation.",
    ],
  },
  {
    title: "Deep Learning Course Workshops",
    github: "https://github.com/abtin81badie/Practical-Deep-Learning-Series",
    tech: "PyTorch, Generative Models, PEFT, CNNs, Transformers",
    details: [
      "Established a comprehensive workshop series covering fundamentals like NumPy, Pandas, and PyTorch, emphasizing GPU-accelerated tensor operations.",
      "Built a diverse range of models from scratch, including CNNs, RNNs, LSTMs, and generative models like VAEs and Conditional GANs.",
      "Implemented advanced, parameter-efficient fine-tuning (PEFT) techniques, including building a Transformer from the ground up and using LoRA to adapt a Stable Diffusion model.",
    ],
  },
  {
    title: "Decision Tree for Fraud Detection",
    github: "https://github.com/abtin81badie/decision-tree",
    tech: "Python, Classical Machine Learning",
    details: [
      "Implemented a classical Decision Tree algorithm from scratch to perform fraud detection, demonstrating an understanding of core ML principles.",
    ],
  },
  {
    title: "SVM for Text Classification",
    github: "https://github.com/abtin81badie/SVM",
    tech: "Python, NLP, Classical Machine Learning",
    details: [
      "Built a Support Vector Machine (SVM) from the ground up for the task of classifying text documents.",
    ],
  },
  {
    title: "Genetic Algorithm for Clustering",
    github: "https://github.com/abtin81badie/genetics",
    tech: "Python, Optimization Algorithms",
    details: [
      "Engineered a Genetic Algorithm to solve a clustering problem, effectively grouping data points into distinct, optimized clusters.",
    ],
  },
  {
    title: "MLP Neural Networks with TensorFlow",
    github: "https://github.com/abtin81badie/Neural-Network",
    tech: "Python, TensorFlow, Keras, Deep Learning",
    details: [
      "Built and trained Multi-Layer Perceptron (MLP) networks for function approximation and CIFAR-10 image classification.",
      "Conducted full hyperparameter tuning to optimize model accuracy and performance.",
    ],
  },
  {
    title: "Deep Reinforcement Learning Agents",
    github: "https://github.com/abtin81badie/RL",
    tech: "Python, Reinforcement Learning",
    details: [
      "Engineered deep reinforcement learning agents for pendulum balancing (achieving a 95% success rate) and the game of Othello (reaching an 82% win rate).",
    ],
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
              <ProjectTitleWrapper>
                <ProjectTitleLink href={proj.github} target="_blank" rel="noopener noreferrer">
                  {proj.title}
                </ProjectTitleLink>
                {proj.github && <GithubIcon />}
              </ProjectTitleWrapper>
              
              <ProjectDetailsList>
                {proj.details.map((item, i) => (
                  <ProjectDetailItem key={i}>{item}</ProjectDetailItem>
                ))}
              </ProjectDetailsList>
              
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
