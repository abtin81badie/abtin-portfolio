import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import styled from "styled-components";
import { repositoryUrl, siteConfig } from "../../config/site";
import { color, ease, gradient, radius } from "../../theme/tokens";
import { Button } from "../../ui/Button";
import { GradientText } from "../../ui/GradientText";
import { Icon } from "../../ui/Icon";
import { Field, Input } from "./editors/formUi";

const Page = styled.div`
  position: relative;
  min-height: 100svh;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow: hidden;
  isolation: isolate;
`;

const Glow = styled(motion.div)`
  position: absolute;
  z-index: -1;
  width: 520px;
  aspect-ratio: 1;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
`;

const Card = styled(motion.form)`
  width: min(460px, 100%);
  padding: clamp(24px, 5vw, 40px);
  border-radius: 28px;
  background: var(--surface);
  border: 1px solid ${color.border};
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-lg);
  display: grid;
  gap: 20px;
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 18px;
  color: #fff;
  background: ${gradient.brand};
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.45);
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

const Muted = styled.p`
  font-size: 0.92rem;
  color: ${color.textMuted};
`;

const ErrorBox = styled(motion.p)`
  padding: 10px 14px;
  font-size: 0.88rem;
  border-radius: ${radius.sm};
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
`;

const Check = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  cursor: pointer;
`;

const Details = styled.details`
  font-size: 0.86rem;
  color: ${color.textMuted};

  summary {
    cursor: pointer;
    font-weight: 600;
    color: ${color.text};
  }

  ol {
    margin: 10px 0 0 18px;
    display: grid;
    gap: 6px;
  }

  a {
    color: ${color.primary};
  }

  code {
    font-size: 0.8rem;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  color: ${color.textMuted};

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${color.border};
  }
`;

const BackLink = styled.a`
  justify-self: center;
  font-size: 0.85rem;
  color: ${color.textMuted};
`;

interface Props {
  checking: boolean;
  error?: string;
  onSignIn: (token: string, remember: boolean) => void;
  onOffline: () => void;
}

export function LoginScreen({ checking, error, onSignIn, onOffline }: Props) {
  const [token, setToken] = useState("");
  const [remember, setRemember] = useState(false);
  const { owner, name } = siteConfig.repository;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (token.trim()) onSignIn(token, remember);
  };

  return (
    <Page>
      <Glow style={{ background: "#6366f1", top: "-10%", left: "-10%" }} animate={{ x: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <Glow style={{ background: "#ec4899", bottom: "-20%", right: "-10%" }} animate={{ y: [0, -60, 0] }} transition={{ duration: 16, repeat: Infinity }} />

      <Card
        onSubmit={submit}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: ease.out }}
      >
        <Logo>
          <Icon name="lock" size={24} />
        </Logo>
        <div>
          <Title>
            <GradientText>Admin panel</GradientText>
          </Title>
          <Muted>
            Sign in with a GitHub token to edit and publish your portfolio. Changes are committed to{" "}
            <code>
              {owner}/{name}
            </code>{" "}
            and deployed automatically.
          </Muted>
        </div>

        <AnimatePresence>
          {error && (
            <ErrorBox initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              {error}
            </ErrorBox>
          )}
        </AnimatePresence>

        <Field label="GitHub personal access token" htmlFor="token">
          <Input
            id="token"
            type="password"
            autoComplete="off"
            placeholder="github_pat_…"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </Field>

        <Check>
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          Remember on this device
        </Check>

        <Button type="submit" variant="primary" disabled={checking || !token.trim()}>
          {checking ? "Verifying…" : "Sign in"} <Icon name="arrowRight" />
        </Button>

        <Details>
          <summary>How do I get a token?</summary>
          <ol>
            <li>
              Open{" "}
              <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener noreferrer">
                GitHub → Fine-grained tokens
              </a>
              .
            </li>
            <li>
              Under <em>Repository access</em> choose <em>Only select repositories</em> →{" "}
              <code>{name}</code>.
            </li>
            <li>
              Under <em>Permissions → Contents</em> choose <em>Read and write</em>.
            </li>
            <li>Generate, copy and paste it above. It is stored only in this browser.</li>
          </ol>
        </Details>

        <Divider>or</Divider>

        <Button variant="subtle" onClick={onOffline}>
          Edit locally without publishing
        </Button>

        <BackLink href="#/">← Back to portfolio</BackLink>
        <BackLink href={repositoryUrl} target="_blank" rel="noopener noreferrer">
          View repository
        </BackLink>
      </Card>
    </Page>
  );
}
