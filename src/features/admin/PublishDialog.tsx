import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { repositoryUrl } from "../../config/site";
import { ContentConflictError } from "../../services/content/GitHubContentRepository";
import { color, ease, radius } from "../../theme/tokens";
import { Button } from "../../ui/Button";
import { Icon } from "../../ui/Icon";
import { Field, Help, TextArea } from "./editors/formUi";
import { useToast } from "./Toasts";
import type { ContentEditor } from "./useContentEditor";

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 90;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(5, 8, 20, 0.55);
  backdrop-filter: blur(6px);
`;

const Dialog = styled(motion.div)`
  width: min(520px, 100%);
  display: grid;
  gap: 18px;
  padding: 28px;
  border-radius: 24px;
  background: ${color.bgElevated};
  border: 1px solid ${color.border};
  box-shadow: var(--shadow-lg);

  h2 {
    font-size: 1.4rem;
  }
`;

const Warning = styled.div`
  padding: 12px 14px;
  font-size: 0.88rem;
  border-radius: ${radius.sm};
  background: rgba(245, 158, 11, 0.12);
  border: 1px solid rgba(245, 158, 11, 0.4);
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
`;

interface Props {
  open: boolean;
  editor: ContentEditor;
  onClose: () => void;
}

export function PublishDialog({ open, editor, onClose }: Props) {
  const toast = useToast();
  const [message, setMessage] = useState("content: update portfolio via admin panel");
  const [busy, setBusy] = useState(false);
  const [conflict, setConflict] = useState(false);

  const close = () => {
    if (busy) return;
    setConflict(false);
    onClose();
  };

  const publish = async (force: boolean) => {
    setBusy(true);
    try {
      const { commitUrl } = await editor.publish(message.trim() || "content: update portfolio", force);
      toast(
        <>
          Published! Your site will update in about a minute.{" "}
          <a href={commitUrl} target="_blank" rel="noopener noreferrer">
            Commit
          </a>{" "}
          ·{" "}
          <a href={`${repositoryUrl}/actions`} target="_blank" rel="noopener noreferrer">
            Deploy status
          </a>
        </>,
        "success",
      );
      setConflict(false);
      onClose();
    } catch (error) {
      if (error instanceof ContentConflictError) setConflict(true);
      else toast(`Publish failed: ${error instanceof Error ? error.message : String(error)}`, "error");
    } finally {
      setBusy(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <Backdrop initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
          <Dialog
            role="dialog"
            aria-modal="true"
            aria-labelledby="publish-title"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: ease.out }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="publish-title">Publish changes</h2>
            <Help>
              This commits your content to GitHub. The deploy workflow then rebuilds the site — usually live within a
              minute or two.
            </Help>
            <Field label="Commit message" htmlFor="commit-message">
              <TextArea
                id="commit-message"
                rows={2}
                style={{ minHeight: 64 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>
            {conflict && (
              <Warning>
                <strong>Someone changed the content on GitHub</strong> since you opened the editor (maybe another tab
                or a direct commit). You can overwrite it with your version, or cancel, reload and re-apply your
                edits.
              </Warning>
            )}
            <Actions>
              <Button variant="subtle" onClick={close} disabled={busy}>
                Cancel
              </Button>
              {conflict ? (
                <Button variant="danger" onClick={() => void publish(true)} disabled={busy}>
                  {busy ? "Publishing…" : "Overwrite & publish"}
                </Button>
              ) : (
                <Button variant="primary" onClick={() => void publish(false)} disabled={busy}>
                  <Icon name="save" /> {busy ? "Publishing…" : "Publish"}
                </Button>
              )}
            </Actions>
          </Dialog>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}
