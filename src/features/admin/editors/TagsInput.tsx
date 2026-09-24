import { AnimatePresence, motion } from "framer-motion";
import { useState, type KeyboardEvent } from "react";
import styled from "styled-components";
import { color, radius } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";
import { parseTags, removeItem } from "./listOps";
import { occurrenceKeys } from "./values";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 7px;
  border-radius: ${radius.sm};
  border: 1px solid var(--border-strong);
  background: var(--bg);
  cursor: text;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--glow);
  }
`;

const Tag = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 6px 4px 10px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: ${radius.pill};
  color: ${color.primary};
  background: var(--glow);

  button {
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.12);
    }
  }
`;

const Entry = styled.input`
  flex: 1;
  min-width: 140px;
  padding: 4px 6px;
  border: 0;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
`;

interface Props {
  id?: string;
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

/** Chip input: Enter or comma adds a tag, Backspace on empty removes the last. */
export function TagsInput({ id, value, onChange, placeholder }: Props) {
  const [draft, setDraft] = useState("");

  const commit = (text: string) => {
    const tags = parseTags(text).filter((t) => !value.includes(t));
    if (tags.length) onChange([...value, ...tags]);
    setDraft("");
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      commit(draft);
    } else if (event.key === "Backspace" && draft === "" && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  const keys = occurrenceKeys(value);

  return (
    <Box onClick={(e) => (e.currentTarget.querySelector("input") as HTMLInputElement | null)?.focus()}>
      <AnimatePresence initial={false}>
        {value.map((tag, i) => (
          <Tag
            key={keys[i]}
            layout
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            {tag}
            <button type="button" aria-label={`Remove ${tag}`} onClick={() => onChange(removeItem(value, i))}>
              <Icon name="close" size={12} />
            </button>
          </Tag>
        ))}
      </AnimatePresence>
      <Entry
        id={id}
        value={draft}
        placeholder={value.length ? "" : (placeholder ?? "Type and press Enter")}
        onChange={(e) => (e.target.value.includes(",") ? commit(e.target.value) : setDraft(e.target.value))}
        onKeyDown={onKeyDown}
        onBlur={() => draft && commit(draft)}
        onPaste={(e) => {
          const text = e.clipboardData.getData("text");
          if (/[,;\n]/.test(text)) {
            e.preventDefault();
            commit(draft + text);
          }
        }}
      />
    </Box>
  );
}
