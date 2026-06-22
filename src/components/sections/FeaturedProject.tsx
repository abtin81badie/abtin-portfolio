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
  margin-bottom: 12px;
  text-align: center;
  background: ${theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: 1.05rem;
  margin-bottom: 56px;
`;

const Card = styled.div`
  position: relative;
  background: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  border-radius: 22px;
  box-shadow: ${theme.shadow};
  overflow: hidden;
`;

const Banner = styled.div`
  background: ${theme.gradient};
  padding: 38px 36px;
  color: #fff;

  @media screen and (max-width: 600px) {
    padding: 28px 22px;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
`;

const ProjectName = styled.h3`
  font-size: 2rem;
  margin-bottom: 8px;

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const ProjectRole = styled.p`
  font-size: 1.05rem;
  opacity: 0.92;
`;

const Body = styled.div`
  padding: 36px;

  @media screen and (max-width: 600px) {
    padding: 24px 22px;
  }
`;

const Lead = styled.p`
  font-size: 1.1rem;
  line-height: 1.85;
  color: ${theme.colors.text};
  margin-bottom: 14px;
`;

const NotePrivate = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: ${theme.gradientSoft};
  border: 1px dashed ${theme.colors.violet};
  border-radius: 14px;
  padding: 16px 18px;
  color: ${theme.colors.text};
  font-size: 0.98rem;
  line-height: 1.6;
  margin: 22px 0 36px;
`;

const LockIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;

const HighlightText = styled.p`
  font-size: 1rem;
  line-height: 1.85;
  color: ${theme.colors.text};
  margin-bottom: 28px;
`;

const SubHead = styled.h4`
  font-size: 1.25rem;
  color: ${theme.colors.heading};
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "";
    width: 10px;
    height: 22px;
    border-radius: 4px;
    background: ${theme.gradient};
  }
`;

/* Pipeline */
const Pipeline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  margin-bottom: 40px;
`;

const Stage = styled.span<{ $i: number }>`
  background: ${({ $i }) => theme.accents[$i % theme.accents.length]}1a;
  color: ${({ $i }) => theme.accents[$i % theme.accents.length]};
  border: 1px solid ${({ $i }) => theme.accents[$i % theme.accents.length]}55;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 8px 14px;
  border-radius: 10px;
`;

const Arrow = styled.span`
  color: ${theme.colors.textMuted};
  font-weight: 700;
`;

/* Model evolution metrics */
const Evolution = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin-bottom: 40px;
`;

const ModelCard = styled.div<{ $accent: string; $final?: boolean }>`
  position: relative;
  border-radius: 16px;
  padding: 22px;
  background: ${({ $final, $accent }) =>
    $final ? `${$accent}12` : theme.colors.bg};
  border: 1px solid ${({ $accent, $final }) => ($final ? $accent : theme.colors.border)};
  box-shadow: ${({ $final }) => ($final ? theme.shadow : "none")};
`;

const ModelTag = styled.span<{ $accent: string }>`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${({ $accent }) => $accent};
  margin-bottom: 6px;
`;

const ModelName = styled.h5`
  font-size: 1.1rem;
  color: ${theme.colors.heading};
  margin-bottom: 16px;
`;

const MetricRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.92rem;
  padding: 6px 0;
  border-top: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};

  &:first-of-type {
    border-top: none;
  }

  span:last-child {
    font-weight: 700;
  }
`;

const BestBadge = styled.span<{ $accent: string }>`
  position: absolute;
  top: -11px;
  right: 16px;
  background: ${({ $accent }) => $accent};
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
`;

/* Tech badges */
const TechWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tech = styled.span<{ $i: number }>`
  font-size: 0.85rem;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 999px;
  color: ${({ $i }) => theme.accents[$i % theme.accents.length]};
  background: ${({ $i }) => theme.accents[$i % theme.accents.length]}14;
  border: 1px solid ${({ $i }) => theme.accents[$i % theme.accents.length]}33;
`;

const pipeline = [
  "Smartphone photo + color card",
  "Canny + Hough card detection",
  "Homography warp (DLT · SVD)",
  "Grid segmentation",
  "Von Kries white-balance",
  "Swin + LoRA inference",
  "Bilirubin (TCB) + risk level",
];

const models = [
  {
    tag: "Baseline",
    name: "1D-CNN (Keras)",
    accent: theme.colors.cyan,
    metrics: [
      ["Correlation", "42%"],
      ["MAE", "3.12"],
      ["RMSE", "4.05"],
    ],
  },
  {
    tag: "Classical ML benchmark",
    name: "BiliBin (GPR + 111 features)",
    accent: theme.colors.amber,
    metrics: [
      ["Approach", "Feature eng."],
      ["RMSE", "2.28"],
    ],
  },
  {
    tag: "Final model",
    name: "Swin Transformer + LoRA",
    accent: theme.colors.pink,
    final: true,
    metrics: [
      ["Correlation", "≈ 85%"],
      ["MAE", "1.50 mg/dL"],
      ["RMSE", "2.20 mg/dL"],
    ],
  },
];

const techStack = [
  "Python",
  "PyTorch",
  "Swin Transformer",
  "LoRA / PEFT",
  "Hugging Face",
  "OpenCV",
  "NumPy",
  "FastAPI",
  "React",
  "Docker",
  "CI/CD (GitHub Actions)",
  "Clean Architecture",
];

const FeaturedProject = () => {
  return (
    <SectionContainer id="featured">
      <SectionWrapper>
        <SectionTitle>Featured Project</SectionTitle>
        <SectionSubtitle>My undergraduate final project (thesis)</SectionSubtitle>

        <Card>
          <Banner>
            <BadgeRow>
              <Pill>🩺 Medical AI</Pill>
              <Pill>🎓 B.Sc. Thesis</Pill>
              <Pill>🚧 In Progress · Private</Pill>
            </BadgeRow>
            <ProjectName>NeoScan — Non-Invasive Neonatal Jaundice Detection</ProjectName>
            <ProjectRole>
              Iran University of Science &amp; Technology · Supervisors: Dr. Isa
              Zarepour &amp; Dr. Sauleh Etemadi
            </ProjectRole>
          </Banner>

          <Body>
            <Lead>
              NeoScan estimates a newborn's bilirubin level (TCB) from a single
              smartphone photo of the skin next to a color-calibration card —
              offering a low-cost, non-invasive alternative to painful blood
              draws for jaundice screening. The system pairs a robust classical
              computer-vision pipeline with a modern deep-learning model and
              ships as a full-stack, containerized application.
            </Lead>

            <NotePrivate>
              <LockIcon>🔒</LockIcon>
              <span>
                <strong>Not publicly available.</strong> Because NeoScan is still
                under active development, the source code and live demo are kept
                private for now. The summary, architecture and results below are
                shared from my thesis work.
              </span>
            </NotePrivate>

            <SubHead>End-to-End Pipeline</SubHead>
            <Pipeline>
              {pipeline.map((stage, i) => (
                <React.Fragment key={stage}>
                  <Stage $i={i}>{stage}</Stage>
                  {i < pipeline.length - 1 && <Arrow>→</Arrow>}
                </React.Fragment>
              ))}
            </Pipeline>

            <SubHead>Model Evolution &amp; Results</SubHead>
            <Evolution>
              {models.map((m) => (
                <ModelCard key={m.name} $accent={m.accent} $final={m.final}>
                  {m.final && <BestBadge $accent={m.accent}>★ Best</BestBadge>}
                  <ModelTag $accent={m.accent}>{m.tag}</ModelTag>
                  <ModelName>{m.name}</ModelName>
                  {m.metrics.map(([k, v]) => (
                    <MetricRow key={k}>
                      <span>{k}</span>
                      <span>{v}</span>
                    </MetricRow>
                  ))}
                </ModelCard>
              ))}
            </Evolution>

            <SubHead>Highlights</SubHead>
            <HighlightText>
              Built a hardware-agnostic image-preprocessing pipeline (perspective
              correction via homography, projection-profile grid segmentation,
              median-based Von Kries color calibration). Benchmarked a 1D-CNN and
              classical ML regressors (KNN, SVR, Random Forest, Bayesian, GPR),
              then reached ≈85% correlation by fine-tuning a Swin Transformer with
              LoRA — training only ~0.7% of parameters to avoid overfitting.
              Delivered as a FastAPI backend + React frontend, fully Dockerized
              with CI/CD.
            </HighlightText>

            <SubHead>Tech Stack</SubHead>
            <TechWrap>
              {techStack.map((t, i) => (
                <Tech key={t} $i={i}>
                  {t}
                </Tech>
              ))}
            </TechWrap>
          </Body>
        </Card>
      </SectionWrapper>
    </SectionContainer>
  );
};

export default FeaturedProject;
