import type { PortfolioContent } from "../../../domain/content";
import type { EditorPage } from "../editorPages";
import { FieldEditor } from "../editors/FieldEditor";
import { ListEditor } from "../editors/ListEditor";
import { ObjectEditor } from "../editors/ObjectEditor";
import { asList, asObj } from "../editors/values";
import type { ContentEditor } from "../useContentEditor";

/** Renders an EditorPage's schema bound to one top-level content key. */
export function SchemaPanel({ page, editor }: { page: EditorPage; editor: ContentEditor }) {
  if (!editor.content) return null;
  const value = editor.content[page.key];
  const set = (next: unknown) =>
    editor.update(page.key, next as PortfolioContent[typeof page.key]);

  switch (page.schema.kind) {
    case "list":
      return <ListEditor schema={page.schema} value={asList(value)} onChange={set} />;
    case "object":
      return <ObjectEditor fields={page.schema.fields} value={asObj(value)} onChange={set} />;
    default:
      return <FieldEditor schema={page.schema} value={value} onChange={set} />;
  }
}
