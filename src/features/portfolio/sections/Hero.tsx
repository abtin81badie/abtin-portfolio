import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { publicAsset } from "../../../config/site";
import { useScrollTo } from "../../../hooks/useScrollTo";
import { color, ease, font, gradient, layout, media, radius } from "../../../theme/tokens";
import { ButtonLink, Button } from "../../../ui/Button";
import { GradientText } from "../../../ui/GradientText";
import { Icon } from "../../../ui/Icon";
import { useContent } from "../ContentContext";
import { SocialLinks } from "../layout/SocialLinks";

const Wrapper = styled.section`
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding: calc(${layout.navHeight} + 40px) 0 96px;
  overflow: hidden;
  isolation: isolate;
`;

const Grid = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
`;

const Blob = styled(motion.div)<{ $color: string; $size: string }>`
  position: absolute;
  z-index: -2;
  width: ${({ $size }) => $size};
  aspect-ratio: 1;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  filter: blur(90px);
  opacity: 0.45;
`;

const Content = styled(motion.div)`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${layout.gutter};
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  align-items: center;
  gap: clamp(32px, 6vw, 80px);

  ${media.md} {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const Badge = styled(motion.span)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 10px;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: ${radius.pill};
  color: ${color.text};
  background: var(--surface);
  border: 1px solid ${color.border};
  backdrop-filter: blur(10px);
`;

const ping = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  80%, 100% { transform: scale(2.6); opacity: 0; }
`;

const Dot = styled.span`
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #10b981;
    animation: ${ping} 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
`;

const Eyebrow = styled(motion.p)`
  font-family: ${font.mono};
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${color.textMuted};
`;

const Name = styled.h1`
  font-size: clamp(3rem, 9vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
`;

const Word = styled.span`
  display: inline-block;
  overflow: hidden;
  padding-bottom: 0.08em;
  margin-right: 0.22em;
  vertical-align: top;

  &:last-child {
    margin-right: 0;
  }
`;

const Letter = styled(motion.span)`
  display: inline-block;
`;

const RoleLine = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4em;
  font-family: ${font.display};
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  font-weight: 600;
  color: ${color.heading};
`;

const RoleSlot = styled.span`
  position: relative;
  display: inline-grid;
  overflow: hidden;
  height: 1.35em;
`;

const Headline = styled(motion.p)`
  max-width: 580px;
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: ${color.textMuted};
`;

const Ctas = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 6px;
`;

const Visual = styled(motion.div)`
  position: relative;
  justify-self: center;
  width: min(380px, 78vw);
  aspect-ratio: 1;

  ${media.md} {
    order: -1;
    width: min(260px, 64vw);
  }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Ring = styled.div`
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #06b6d4, #6366f1);
  animation: ${spin} 10s linear infinite;
  filter: blur(1px);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: inherit;
    filter: blur(30px);
    opacity: 0.6;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Photo = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid var(--bg);
`;

const Floating = styled(motion.div)<{ $pos: string }>`
  position: absolute;
  ${({ $pos }) => $pos};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  white-space: nowrap;
  color: ${color.heading};
  border-radius: 14px;
  background: var(--surface);
  border: 1px solid ${color.border};
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow-md);

  ${media.sm} {
    display: none;
  }
`;

const ScrollHint = styled(motion.button)`
  position: absolute;
  left: 50%;
  bottom: 28px;
  translate: -50% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border: 0;
  background: none;
  cursor: pointer;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${color.textMuted};

  ${media.sm} {
    display: none;
  }
`;

const Mouse = styled.span`
  display: flex;
  justify-content: center;
  width: 24px;
  height: 38px;
  padding-top: 7px;
  border-radius: 14px;
  border: 2px solid ${color.borderStrong};
`;

const Wheel = styled(motion.span)`
  width: 4px;
  height: 8px;
  border-radius: 2px;
  background: ${gradient.brand};
`;

const intro = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: ease.out },
});

function RotatingRole({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (roles.length < 2 || reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => window.clearInterval(id);
  }, [roles.length, reduced]);

  if (roles.length === 0) return null;
  const role = roles[index % roles.length];
  const article = /^[aeiou]/i.test(role) ? "an" : "a";

  return (
    <RoleSlot aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={role}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: ease.out }}
          style={{ gridArea: "1 / 1", whiteSpace: "nowrap" }}
        >
          {article} <GradientText $animated>{role}</GradientText>
        </motion.span>
      </AnimatePresence>
    </RoleSlot>
  );
}

function AnimatedName({ name }: { name: string }) {
  let letterIndex = 0;
  return (
    <Name aria-label={name}>
      {name.split(" ").map((word, w) => (
        <Word key={`${word}-${w}`} aria-hidden="true">
          {[...word].map((char) => {
            const delay = 0.25 + letterIndex++ * 0.035;
            return (
              <Letter
                key={`${char}-${delay}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay, ease: ease.out }}
              >
                {char}
              </Letter>
            );
          })}
        </Word>
      ))}
    </Name>
  );
}

const floatLoop = (distance: number, duration: number) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
});

export function Hero() {
  const { profile, socials, sections, resume, stats } = useContent();
  const scrollTo = useScrollTo();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const firstSection = sections.find((s) => s.visible)?.id;
  const workSection = sections.find((s) => s.visible && s.id === "projects")?.id ?? firstSection;
  const topStat = stats[0];

  return (
    <Wrapper id="top" aria-label="Introduction">
      <Grid />
      <Blob
        $color="#6366f1"
        $size="min(520px, 80vw)"
        style={{ top: "-10%", left: "-8%" }}
        animate={reduced ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <Blob
        $color="#ec4899"
        $size="min(460px, 70vw)"
        style={{ top: "20%", right: "-10%" }}
        animate={reduced ? undefined : { x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <Blob
        $color="#06b6d4"
        $size="min(420px, 70vw)"
        style={{ bottom: "-18%", left: "30%" }}
        animate={reduced ? undefined : { x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <Content style={{ y, opacity }}>
        <Text>
          {profile.availability && (
            <Badge {...intro(0.05)}>
              <Dot />
              {profile.availability}
            </Badge>
          )}
          {profile.eyebrow && <Eyebrow {...intro(0.15)}>{profile.eyebrow}</Eyebrow>}
          <AnimatedName name={profile.name} />
          {profile.roles.length > 0 && (
            <RoleLine {...intro(0.7)}>
              <span>I'm</span>
              <RotatingRole roles={profile.roles} />
            </RoleLine>
          )}
          <Headline {...intro(0.85)}>{profile.headline}</Headline>
          <Ctas {...intro(1)}>
            {workSection && (
              <Button variant="primary" onClick={() => scrollTo(workSection)}>
                View my work <Icon name="arrowRight" />
              </Button>
            )}
            {resume.file && (
              <ButtonLink variant="ghost" href={publicAsset(resume.file)} download={resume.downloadName || true}>
                <Icon name="download" /> Download CV
              </ButtonLink>
            )}
          </Ctas>
          <SocialLinks links={socials} delay={1.15} />
        </Text>

        {profile.photo && (
          <Visual
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: ease.out }}
          >
            <Ring />
            <Photo src={publicAsset(profile.photo)} alt={profile.name} />
            {profile.location && (
              <Floating $pos="top: 8%; left: -14%;" {...floatLoop(10, 5)}>
                <Icon name="pin" size={16} /> {profile.location}
              </Floating>
            )}
            {topStat && (
              <Floating $pos="bottom: 10%; right: -12%;" {...floatLoop(12, 6)}>
                <Icon name="sparkles" size={16} />
                {topStat.value.toFixed(topStat.decimals)}
                {topStat.suffix} · {topStat.label}
              </Floating>
            )}
          </Visual>
        )}
      </Content>

      {firstSection && (
        <ScrollHint
          onClick={() => scrollTo(firstSection)}
          aria-label="Scroll to content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <Mouse>
            <Wheel
              animate={reduced ? undefined : { y: [0, 10, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </Mouse>
          Scroll
        </ScrollHint>
      )}
    </Wrapper>
  );
}
