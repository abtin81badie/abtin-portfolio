import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { navigate } from "../../hooks/useHashRoute";
import { BundledContentReader } from "../../services/content/BundledContentReader";
import { useThemeMode } from "../../theme/ThemeMode";
import { color, ease, font, gradient, radius } from "../../theme/tokens";
import { Button, ButtonLink } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import { PublishDialog } from "./PublishDialog";
import { adminPanels } from "./panels/registry";
import { draftStore, previewStore } from "./services";
import type { AdminSession } from "./useAdminSession";
import { useContentEditor } from "./useContentEditor";

const Shell = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`;

const Top = styled.header`
  position: sticky;
  top: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px clamp(14px, 3vw, 24px);
  background: var(--surface);
  border-bottom: 1px solid ${color.border};
  backdrop-filter: blur(18px);
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${font.display};
  font-weight: 700;
  color: ${color.heading};
  text-decoration: none;

  span:first-child {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border-radius: 11px;
    color: #fff;
    background: ${gradient.brand};
  }

  @media (max-width: 720px) {
    span:last-child {
      display: none;
    }
  }
`;

const Status = styled.span<{ $tone: "ok" | "warn" | "muted" }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: ${radius.pill};
  color: ${({ $tone }) => ($tone === "ok" ? "#10b981" : $tone === "warn" ? "#f59e0b" : color.textMuted)};
  background: ${({ $tone }) =>
    $tone === "ok" ? "rgba(16,185,129,0.12)" : $tone === "warn" ? "rgba(245,158,11,0.14)" : "var(--surface)"};

  @media (max-width: 900px) {
    &[data-optional] {
      display: none;
    }
  }
`;

const Dot = styled(motion.span)`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
`;

const Spacer = styled.div`
  flex: 1;
`;

const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 720px) {
    .label {
      display: none;
    }
  }
`;

const Body = styled.div<{ $preview: boolean }>`
  flex: 1;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr) ${({ $preview }) => ($preview ? "minmax(0, 1fr)" : "")};

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.nav`
  position: sticky;
  top: 61px;
  align-self: start;
  height: calc(100svh - 61px);
  overflow-y: auto;
  padding: 18px 12px;
  border-right: 1px solid ${color.border};

  @media (max-width: 900px) {
    position: static;
    height: auto;
    display: flex;
    gap: 4px;
    overflow-x: auto;
    padding: 10px;
    border-right: 0;
    border-bottom: 1px solid ${color.border};

    h4 {
      display: none;
    }
  }
`;

const GroupTitle = styled.h4`
  margin: 14px 10px 8px;
  font-family: ${font.mono};
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${color.textMuted};
`;

const NavItem = styled.button<{ $active: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 12px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  border: 0;
  border-radius: 12px;
  background: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? color.heading : color.textMuted)};
  transition: color 0.2s ease;

  &:hover {
    color: ${color.heading};
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 900px) {
    width: auto;
  }
`;

const NavPill = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: 12px;
  background: var(--surface);
  border: 1px solid ${color.borderStrong};
  box-shadow: var(--shadow-sm);
`;

const Main = styled.main`
  min-width: 0;
  padding: clamp(20px, 4vw, 40px);
`;

const Inner = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const PanelHead = styled.div`
  margin-bottom: 26px;

  h1 {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    margin-top: 6px;
    color: ${color.textMuted};
  }
`;

const Banner = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 22px;
  padding: 12px 16px;
  font-size: 0.9rem;
  border-radius: ${radius.md};
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
`;

const Preview = styled(motion.aside)`
  position: sticky;
  top: 61px;
  height: calc(100svh - 61px);
  border-left: 1px solid ${color.border};
  background: var(--bg);

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Center = styled.div`
  min-height: 100svh;
  display: grid;
  place-items: center;
  gap: 12px;
  text-align: center;
  color: ${color.textMuted};
`;

const Spinner = styled(motion.div)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 3px solid ${color.border};
  border-top-color: var(--primary);
`;

interface Props {
  session: Extract<AdminSession, { status: "online" | "offline" }>;
  panelId: string | undefined;
  onSignOut: () => void;
}

export function AdminWorkspace({ session, panelId, onSignOut }: Props) {
  const repository = session.status === "online" ? session.repository : undefined;
  const reader = useMemo(() => repository ?? new BundledContentReader(), [repository]);
  const editor = useContentEditor({ reader, publisher: repository, drafts: draftStore, preview: previewStore });
  const { mode, toggle } = useThemeMode();
  const [publishOpen, setPublishOpen] = useState(false);
  const [preview, setPreview] = useState(false);

  const panel = adminPanels.find((p) => p.id === panelId) ?? adminPanels[0];
  const groups = ["Content", "Tools"] as const;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
        event.preventDefault();
        if (editor.canPublish && editor.dirty) setPublishOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [editor.canPublish, editor.dirty]);

  if (editor.loadState !== "ready") {
    return (
      <Center>
        {editor.loadState === "loading" ? (
          <div>
            <Spinner animate={{ rotate: 360 }} transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }} />
          </div>
        ) : (
          <div>
            <p>Could not load content: {editor.loadError}</p>
            <Button variant="ghost" onClick={() => void editor.reload()} style={{ marginTop: 12 }}>
              <Icon name="refresh" /> Try again
            </Button>
          </div>
        )}
      </Center>
    );
  }

  const previewSrc = `${window.location.pathname}#/preview`;

  return (
    <Shell>
      <Top>
        <Brand href="#/admin">
          <span>
            <Icon name="sparkles" size={18} />
          </span>
          <span>Portfolio Admin</span>
        </Brand>
        <Status $tone={session.status === "online" ? "ok" : "muted"} data-optional>
          {session.status === "online" ? `@${session.login}` : "Local only"}
        </Status>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={editor.dirty ? "dirty" : "clean"}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
          >
            <Status $tone={editor.dirty ? "warn" : "muted"}>
              <Dot
                animate={editor.dirty ? { scale: [1, 1.5, 1] } : undefined}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
              {editor.dirty ? "Unpublished changes" : "Up to date"}
            </Status>
          </motion.div>
        </AnimatePresence>
        <Spacer />
        <TopActions>
          <Button size="sm" variant="subtle" onClick={() => setPreview((p) => !p)} aria-pressed={preview}>
            <Icon name="eye" /> <span className="label">{preview ? "Hide preview" : "Live preview"}</span>
          </Button>
          <ButtonLink size="sm" variant="subtle" href={previewSrc} target="_blank" rel="noopener noreferrer">
            <Icon name="external" /> <span className="label">Open</span>
          </ButtonLink>
          <Button size="sm" variant="subtle" onClick={toggle} aria-label="Toggle theme">
            <Icon name={mode === "dark" ? "sun" : "moon"} />
          </Button>
          {session.status === "online" ? (
            <>
              <Button
                size="sm"
                variant="primary"
                disabled={!editor.dirty}
                onClick={() => setPublishOpen(true)}
                title="Publish (Ctrl/⌘ + S)"
              >
                <Icon name="save" /> <span className="label">Publish</span>
              </Button>
              <Button size="sm" variant="subtle" onClick={onSignOut} aria-label="Sign out">
                <Icon name="logout" />
              </Button>
            </>
          ) : (
            <Button size="sm" variant="primary" onClick={onSignOut}>
              <Icon name="lock" /> <span className="label">Sign in to publish</span>
            </Button>
          )}
        </TopActions>
      </Top>

      <Body $preview={preview}>
        <Sidebar aria-label="Admin sections">
          {groups.map((group, i) => (
            <div key={group} style={{ display: "contents" }}>
              <GroupTitle style={i === 0 ? { marginTop: 0 } : undefined}>{group}</GroupTitle>
              {adminPanels
                .filter((p) => p.group === group)
                .map((p) => (
                  <NavItem key={p.id} $active={p.id === panel.id} onClick={() => navigate(`/admin/${p.id}`)}>
                    {p.id === panel.id && (
                      <NavPill layoutId="admin-nav" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                    )}
                    <span>{p.icon}</span>
                    <span>{p.label}</span>
                  </NavItem>
                ))}
            </div>
          ))}
        </Sidebar>

        <Main>
          <Inner>
            <AnimatePresence>
              {editor.restoredDraft && (
                <Banner initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  <span>We restored the unpublished changes from your last visit.</span>
                  <span style={{ display: "flex", gap: 8 }}>
                    <Button size="sm" variant="subtle" onClick={editor.dismissRestoredNotice}>
                      Keep editing
                    </Button>
                    <Button size="sm" variant="danger" onClick={editor.discard}>
                      Discard them
                    </Button>
                  </span>
                </Banner>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: ease.out }}
              >
                <PanelHead>
                  <h1>
                    <span>{panel.icon}</span>
                    {panel.label}
                  </h1>
                  <p>{panel.description}</p>
                </PanelHead>
                {panel.render({ editor, uploader: repository })}
              </motion.div>
            </AnimatePresence>
          </Inner>
        </Main>

        <AnimatePresence>
          {preview && (
            <Preview initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }}>
              <iframe title="Live preview" src={previewSrc} />
            </Preview>
          )}
        </AnimatePresence>
      </Body>

      <PublishDialog open={publishOpen} editor={editor} onClose={() => setPublishOpen(false)} />
    </Shell>
  );
}
