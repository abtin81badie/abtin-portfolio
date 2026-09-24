// Declarative description of an editable form. The admin panel renders any
// schema with one generic <FieldEditor>, so supporting a new piece of content
// means describing it here — not writing a new form component.

interface Base {
  label: string;
  help?: string;
  /** Lets two short fields share a row. */
  half?: boolean;
}

export type FieldSchema =
  | (Base & { kind: "text"; placeholder?: string; multiline?: boolean })
  | (Base & { kind: "number"; step?: number; min?: number; max?: number })
  | (Base & { kind: "toggle" })
  | (Base & { kind: "select"; options: readonly { value: string; label: string }[] })
  | (Base & { kind: "readonly" })
  | (Base & { kind: "tags"; placeholder?: string })
  | (Base & { kind: "textList"; itemLabel: string; multiline?: boolean })
  | (Base & { kind: "object"; fields: FieldMap })
  | (Base & {
      kind: "list";
      itemLabel: string;
      fields: FieldMap;
      /** Item field shown as the collapsed card title. */
      titleKey: string;
      subtitleKey?: string;
      iconKey?: string;
      create?: () => unknown;
      /** Items can be reordered/edited but not added or removed. */
      fixed?: boolean;
    });

export type FieldMap = Record<string, FieldSchema>;

export type ListSchema = Extract<FieldSchema, { kind: "list" }>;
export type ObjectSchema = Extract<FieldSchema, { kind: "object" }>;
