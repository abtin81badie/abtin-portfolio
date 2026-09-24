import { motion } from "framer-motion";
import type { ReactNode } from "react";
import styled from "styled-components";
import { color, font, gradient, radius } from "../../../theme/tokens";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 18px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FieldBox = styled.div<{ $half?: boolean }>`
  grid-column: ${({ $half }) => ($half ? "auto" : "1 / -1")};
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${color.heading};
`;

export const Help = styled.p`
  font-size: 0.78rem;
  color: ${color.textMuted};
`;

export function Field({
  label,
  help,
  half,
  htmlFor,
  children,
}: {
  label?: string;
  help?: string;
  half?: boolean;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <FieldBox $half={half}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {children}
      {help && <Help>{help}</Help>}
    </FieldBox>
  );
}

const control = `
  width: 100%;
  padding: 10px 12px;
  font-size: 0.93rem;
  border-radius: ${radius.sm};
  border: 1px solid var(--border-strong);
  background: var(--bg);
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px var(--glow);
  }

  &::placeholder {
    color: var(--text-muted);
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  ${control}
`;

export const TextArea = styled.textarea`
  ${control}
  resize: vertical;
  min-height: 96px;
  line-height: 1.6;
`;

export const Select = styled.select`
  ${control}
  cursor: pointer;
`;

export const ReadOnly = styled.div`
  padding: 10px 12px;
  font-family: ${font.mono};
  font-size: 0.85rem;
  border-radius: ${radius.sm};
  background: var(--surface);
  border: 1px dashed var(--border-strong);
  color: ${color.textMuted};
`;

const Switch = styled.button<{ $on: boolean }>`
  position: relative;
  width: 46px;
  height: 26px;
  flex-shrink: 0;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  background: ${({ $on }) => ($on ? gradient.brand : "var(--border-strong)")};
  transition: background 0.25s ease;
`;

const Knob = styled(motion.span)`
  position: absolute;
  top: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`;

const ToggleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 42px;
  font-size: 0.9rem;
`;

export function Toggle({ value, onChange, id }: { value: boolean; onChange: (v: boolean) => void; id?: string }) {
  return (
    <ToggleRow>
      <Switch id={id} type="button" role="switch" aria-checked={value} $on={value} onClick={() => onChange(!value)}>
        <Knob animate={{ left: value ? 23 : 3 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
      </Switch>
      {value ? "Yes" : "No"}
    </ToggleRow>
  );
}

export const IconButton = styled(motion.button)<{ $danger?: boolean }>`
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 9px;
  border: 1px solid transparent;
  background: transparent;
  color: ${({ $danger }) => ($danger ? "#ef4444" : color.textMuted)};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    color: ${({ $danger }) => ($danger ? "#ef4444" : color.heading)};
    background: ${({ $danger }) => ($danger ? "rgba(239,68,68,0.1)" : "var(--surface)")};
    border-color: ${color.border};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const AddButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 11px;
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: ${radius.md};
  border: 1.5px dashed var(--border-strong);
  background: transparent;
  color: ${color.textMuted};
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${color.primary};
    border-color: ${color.primary};
    background: var(--surface);
  }
`;
