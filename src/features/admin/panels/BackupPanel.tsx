import type { ChangeEvent } from "react";
import styled from "styled-components";
import { normalizeContent } from "../../../domain/normalize";
import { bundledContent } from "../../../services/content/BundledContentReader";
import { color, radius } from "../../../theme/tokens";
import { Button, ButtonLabel } from "../../../ui/Button";
import { Icon } from "../../../ui/Icon";
import { Help } from "../editors/formUi";
import { useToast } from "../Toasts";
import type { PanelContext } from "./types";

const List = styled.div`
  display: grid;
  gap: 14px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 18px 20px;
  border-radius: ${radius.lg};
  border: 1px solid ${color.border};
  background: ${color.bgElevated};

  h3 {
    font-size: 1rem;
    margin-bottom: 4px;
  }
`;

export function BackupPanel({ editor }: PanelContext) {
  const toast = useToast();
  const content = editor.content;
  if (!content) return null;

  const exportJson = () => {
    const blob = new Blob([`${JSON.stringify(content, null, 2)}\n`], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-content-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      const parsed: unknown = JSON.parse(await file.text());
      editor.replace(normalizeContent(parsed, bundledContent));
      toast("Imported. Review the changes, then publish.", "success");
    } catch {
      toast("That file is not valid JSON.", "error");
    }
  };

  return (
    <List>
      <Row>
        <div>
          <h3>Export content</h3>
          <Help>Download everything as a JSON backup.</Help>
        </div>
        <Button variant="ghost" size="sm" onClick={exportJson}>
          <Icon name="download" /> Export JSON
        </Button>
      </Row>
      <Row>
        <div>
          <h3>Import content</h3>
          <Help>Load a JSON backup into the editor. Nothing is published until you click Publish.</Help>
        </div>
        <ButtonLabel variant="ghost" size="sm">
          <input type="file" accept="application/json,.json" onChange={importJson} />
          <Icon name="upload" /> Import JSON
        </ButtonLabel>
      </Row>
      <Row>
        <div>
          <h3>Discard unpublished changes</h3>
          <Help>Revert the editor to the last published version.</Help>
        </div>
        <Button
          variant="danger"
          size="sm"
          disabled={!editor.dirty}
          onClick={() => window.confirm("Discard all unpublished changes?") && editor.discard()}
        >
          <Icon name="trash" /> Discard changes
        </Button>
      </Row>
      <Row>
        <div>
          <h3>Reload from source</h3>
          <Help>Fetch the latest published content again (your draft is kept).</Help>
        </div>
        <Button variant="subtle" size="sm" onClick={() => void editor.reload()}>
          <Icon name="refresh" /> Reload
        </Button>
      </Row>
    </List>
  );
}
