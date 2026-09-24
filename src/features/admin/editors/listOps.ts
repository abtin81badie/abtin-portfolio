// Pure, immutable array helpers used by the list editors (and unit tested).

export const moveItem = <T>(list: readonly T[], from: number, to: number): T[] => {
  if (from === to || from < 0 || to < 0 || from >= list.length || to >= list.length) return [...list];
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
};

export const insertItem = <T>(list: readonly T[], index: number, item: T): T[] => {
  const next = [...list];
  next.splice(Math.max(0, Math.min(index, next.length)), 0, item);
  return next;
};

export const removeItem = <T>(list: readonly T[], index: number): T[] => list.filter((_, i) => i !== index);

export const replaceItem = <T>(list: readonly T[], index: number, item: T): T[] =>
  list.map((existing, i) => (i === index ? item : existing));

export const cloneDeep = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/** Splits pasted text like "React, Go; Docker" into trimmed, non-empty tags. */
export const parseTags = (text: string): string[] =>
  text
    .split(/[,;\n]/)
    .map((t) => t.trim())
    .filter(Boolean);
