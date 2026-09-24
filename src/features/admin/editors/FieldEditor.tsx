import { useId } from "react";
import type { FieldSchema } from "../schema";
import { Field, Input, ReadOnly, Select, TextArea, Toggle } from "./formUi";
import { ListEditor } from "./ListEditor";
import { ObjectEditor } from "./ObjectEditor";
import { TagsInput } from "./TagsInput";
import { TextListEditor } from "./TextListEditor";
import { asList, asObj, asStrings } from "./values";

interface Props {
  schema: FieldSchema;
  value: unknown;
  onChange: (value: unknown) => void;
}

/** Renders the right control for any schema node — recursively for objects and lists. */
export function FieldEditor({ schema, value, onChange }: Props) {
  const id = useId();

  switch (schema.kind) {
    case "text": {
      const common = {
        id,
        value: typeof value === "string" ? value : "",
        placeholder: schema.placeholder,
      };
      return (
        <Field label={schema.label} help={schema.help} half={schema.half} htmlFor={id}>
          {schema.multiline ? (
            <TextArea {...common} onChange={(e) => onChange(e.target.value)} />
          ) : (
            <Input {...common} onChange={(e) => onChange(e.target.value)} />
          )}
        </Field>
      );
    }
    case "number":
      return (
        <Field label={schema.label} help={schema.help} half={schema.half} htmlFor={id}>
          <Input
            id={id}
            type="number"
            step={schema.step ?? 1}
            min={schema.min}
            max={schema.max}
            value={typeof value === "number" ? value : 0}
            onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          />
        </Field>
      );
    case "toggle":
      return (
        <Field label={schema.label} help={schema.help} half={schema.half} htmlFor={id}>
          <Toggle id={id} value={value === true} onChange={onChange} />
        </Field>
      );
    case "select":
      return (
        <Field label={schema.label} help={schema.help} half={schema.half} htmlFor={id}>
          <Select id={id} value={typeof value === "string" ? value : ""} onChange={(e) => onChange(e.target.value)}>
            {schema.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </Select>
        </Field>
      );
    case "readonly":
      return (
        <Field label={schema.label} help={schema.help} half={schema.half}>
          <ReadOnly>{String(value ?? "")}</ReadOnly>
        </Field>
      );
    case "tags":
      return (
        <Field label={schema.label} help={schema.help} half={schema.half} htmlFor={id}>
          <TagsInput id={id} value={asStrings(value)} onChange={onChange} placeholder={schema.placeholder} />
        </Field>
      );
    case "textList":
      return (
        <Field label={schema.label} help={schema.help}>
          <TextListEditor
            value={asStrings(value)}
            onChange={onChange}
            itemLabel={schema.itemLabel}
            multiline={schema.multiline}
          />
        </Field>
      );
    case "object":
      return (
        <Field label={schema.label} help={schema.help}>
          <ObjectEditor fields={schema.fields} value={asObj(value)} onChange={onChange} nested />
        </Field>
      );
    case "list":
      return (
        <Field label={schema.label} help={schema.help}>
          <ListEditor schema={schema} value={asList(value)} onChange={onChange} />
        </Field>
      );
  }
}
