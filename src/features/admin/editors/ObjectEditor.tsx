import styled from "styled-components";
import { color, radius } from "../../../theme/tokens";
import type { FieldMap } from "../schema";
import { FieldEditor } from "./FieldEditor";
import { Grid } from "./formUi";
import type { Obj } from "./values";

const Nested = styled.div`
  padding: 16px;
  border-radius: ${radius.md};
  border: 1px solid ${color.border};
  background: var(--surface);
`;

interface Props {
  fields: FieldMap;
  value: Obj;
  onChange: (value: Obj) => void;
  nested?: boolean;
}

export function ObjectEditor({ fields, value, onChange, nested }: Props) {
  const grid = (
    <Grid>
      {Object.entries(fields).map(([key, schema]) => (
        <FieldEditor
          key={key}
          schema={schema}
          value={value[key]}
          onChange={(next) => onChange({ ...value, [key]: next })}
        />
      ))}
    </Grid>
  );
  return nested ? <Nested>{grid}</Nested> : grid;
}
