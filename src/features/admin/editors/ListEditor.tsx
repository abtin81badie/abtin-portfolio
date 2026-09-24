import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { color, ease, font, radius } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";
import type { ListSchema } from "../schema";
import { AddButton, IconButton } from "./formUi";
import { cloneDeep, insertItem, moveItem, removeItem, replaceItem } from "./listOps";
import { ObjectEditor } from "./ObjectEditor";
import { useStableKeys } from "./useStableKeys";
import { asObj } from "./values";

const Items = styled.div`
  display: grid;
  gap: 10px;
`;

const Item = styled(motion.div)<{ $open: boolean }>`
  border-radius: ${radius.md};
  border: 1px solid ${({ $open }) => ($open ? "var(--primary)" : color.border)};
  background: ${color.bgElevated};
  box-shadow: ${({ $open }) => ($open ? "0 10px 30px var(--glow)" : "none")};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 10px 14px;
`;

const Toggle = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  padding: 2px 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
`;

const Badge = styled.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  font-family: ${font.mono};
  font-size: 0.78rem;
  color: ${color.textMuted};
  background: var(--surface);
  border: 1px solid ${color.border};
`;

const Titles = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 0;

  strong,
  small {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    font-size: 0.93rem;
    color: ${color.heading};
  }

  small {
    font-size: 0.78rem;
    color: ${color.textMuted};
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 2px;
`;

const Body = styled(motion.div)`
  overflow: hidden;
`;

const BodyInner = styled.div`
  padding: 6px 16px 18px;
  border-top: 1px solid ${color.border};
  padding-top: 18px;
`;

const AddRow = styled.div`
  display: flex;
  gap: 10px;
`;

const Empty = styled.p`
  padding: 18px;
  text-align: center;
  font-size: 0.88rem;
  color: ${color.textMuted};
  border-radius: ${radius.md};
  border: 1px dashed var(--border-strong);
`;

interface Props {
  schema: ListSchema;
  value: unknown[];
  onChange: (value: unknown[]) => void;
}

/** Collapsible, reorderable list of objects. Works for any ListSchema. */
export function ListEditor({ schema, value, onChange }: Props) {
  const keys = useStableKeys(value.length);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const add = (index: number) => {
    if (!schema.create) return;
    keys.insert(index);
    setOpenKey(keys.keys[index]);
    onChange(insertItem(value, index, schema.create()));
  };

  const duplicate = (index: number) => {
    keys.insert(index + 1);
    setOpenKey(keys.keys[index + 1]);
    onChange(insertItem(value, index + 1, cloneDeep(value[index])));
  };

  const move = (from: number, to: number) => {
    keys.move(from, to);
    onChange(moveItem(value, from, to));
  };

  const remove = (index: number) => {
    const item = asObj(value[index]);
    const name = String(item[schema.titleKey] ?? schema.itemLabel) || schema.itemLabel;
    if (!window.confirm(`Delete “${name}”?`)) return;
    keys.remove(index);
    onChange(removeItem(value, index));
  };

  return (
    <Items>
      {value.length === 0 && <Empty>No {schema.itemLabel}s yet.</Empty>}
      <AnimatePresence initial={false}>
        {value.map((raw, i) => {
          const item = asObj(raw);
          const key = keys.keys[i];
          const open = openKey === key;
          const title = String(item[schema.titleKey] ?? "") || `Untitled ${schema.itemLabel}`;
          const subtitle = schema.subtitleKey ? String(item[schema.subtitleKey] ?? "") : "";
          const icon = schema.iconKey ? String(item[schema.iconKey] ?? "") : "";

          return (
            <Item
              key={key}
              $open={open}
              layout="position"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: ease.out }}
            >
              <Head>
                <Toggle type="button" aria-expanded={open} onClick={() => setOpenKey(open ? null : key)}>
                  <Badge style={icon ? { fontSize: "1.05rem" } : undefined}>{icon || i + 1}</Badge>
                  <Titles>
                    <strong>{title}</strong>
                    {subtitle && <small>{subtitle}</small>}
                  </Titles>
                </Toggle>
                <Actions>
                  <IconButton type="button" aria-label="Move up" disabled={i === 0} onClick={() => move(i, i - 1)}>
                    <Icon name="arrowUp" size={16} />
                  </IconButton>
                  <IconButton
                    type="button"
                    aria-label="Move down"
                    disabled={i === value.length - 1}
                    onClick={() => move(i, i + 1)}
                  >
                    <Icon name="arrowUp" size={16} style={{ transform: "rotate(180deg)" }} />
                  </IconButton>
                  {!schema.fixed && (
                    <>
                      <IconButton type="button" aria-label="Duplicate" onClick={() => duplicate(i)}>
                        <Icon name="copy" size={16} />
                      </IconButton>
                      <IconButton type="button" $danger aria-label="Delete" onClick={() => remove(i)}>
                        <Icon name="trash" size={16} />
                      </IconButton>
                    </>
                  )}
                  <IconButton
                    type="button"
                    aria-label={open ? "Collapse" : "Expand"}
                    onClick={() => setOpenKey(open ? null : key)}
                    animate={{ rotate: open ? 180 : 0 }}
                  >
                    <Icon name="chevronDown" size={16} />
                  </IconButton>
                </Actions>
              </Head>
              <AnimatePresence initial={false}>
                {open && (
                  <Body
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: ease.out }}
                  >
                    <BodyInner>
                      <ObjectEditor
                        fields={schema.fields}
                        value={item}
                        onChange={(next) => onChange(replaceItem(value, i, next))}
                      />
                    </BodyInner>
                  </Body>
                )}
              </AnimatePresence>
            </Item>
          );
        })}
      </AnimatePresence>
      {!schema.fixed && schema.create && (
        <AddRow>
          {value.length > 0 && (
            <AddButton type="button" whileTap={{ scale: 0.98 }} onClick={() => add(0)}>
              <Icon name="plus" size={16} /> Add {schema.itemLabel} at top
            </AddButton>
          )}
          <AddButton type="button" whileTap={{ scale: 0.98 }} onClick={() => add(value.length)}>
            <Icon name="plus" size={16} /> Add {schema.itemLabel}
            {value.length > 0 ? " at bottom" : ""}
          </AddButton>
        </AddRow>
      )}
    </Items>
  );
}
