import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { color } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";
import { AddButton, IconButton, Input, TextArea } from "./formUi";
import { insertItem, moveItem, removeItem, replaceItem } from "./listOps";
import { useStableKeys } from "./useStableKeys";

const Rows = styled.div`
  display: grid;
  gap: 8px;
`;

const Row = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 6px;
`;

const Index = styled.span`
  flex-shrink: 0;
  width: 22px;
  padding-top: 11px;
  font-size: 0.75rem;
  text-align: right;
  color: ${color.textMuted};
`;

const Actions = styled.div`
  display: flex;
  gap: 2px;
  padding-top: 4px;
`;

interface Props {
  value: string[];
  onChange: (value: string[]) => void;
  itemLabel: string;
  multiline?: boolean;
}

/** Ordered list of free-text entries (paragraphs, bullet points, steps…). */
export function TextListEditor({ value, onChange, itemLabel, multiline }: Props) {
  const keys = useStableKeys(value.length);

  return (
    <Rows>
      <AnimatePresence initial={false}>
        {value.map((text, i) => (
          <Row
            key={keys.keys[i]}
            layout
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Index>{i + 1}.</Index>
            {multiline ? (
              <TextArea
                value={text}
                rows={3}
                aria-label={`${itemLabel} ${i + 1}`}
                onChange={(e) => onChange(replaceItem(value, i, e.target.value))}
              />
            ) : (
              <Input
                value={text}
                aria-label={`${itemLabel} ${i + 1}`}
                onChange={(e) => onChange(replaceItem(value, i, e.target.value))}
              />
            )}
            <Actions>
              <IconButton
                type="button"
                aria-label="Move up"
                disabled={i === 0}
                onClick={() => {
                  keys.move(i, i - 1);
                  onChange(moveItem(value, i, i - 1));
                }}
              >
                <Icon name="arrowUp" size={16} />
              </IconButton>
              <IconButton
                type="button"
                aria-label="Move down"
                disabled={i === value.length - 1}
                onClick={() => {
                  keys.move(i, i + 1);
                  onChange(moveItem(value, i, i + 1));
                }}
              >
                <Icon name="arrowUp" size={16} style={{ transform: "rotate(180deg)" }} />
              </IconButton>
              <IconButton
                type="button"
                $danger
                aria-label={`Delete ${itemLabel}`}
                onClick={() => {
                  keys.remove(i);
                  onChange(removeItem(value, i));
                }}
              >
                <Icon name="trash" size={16} />
              </IconButton>
            </Actions>
          </Row>
        ))}
      </AnimatePresence>
      <AddButton
        type="button"
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          keys.insert(value.length);
          onChange(insertItem(value, value.length, ""));
        }}
      >
        <Icon name="plus" size={16} /> Add {itemLabel}
      </AddButton>
    </Rows>
  );
}
