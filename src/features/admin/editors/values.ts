// Safe coercions for the untyped values flowing through the generic editor.

export type Obj = Record<string, unknown>;

export const asObj = (v: unknown): Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v) ? (v as Obj) : {};

export const asList = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

export const asStrings = (v: unknown): string[] => asList(v).filter((x): x is string => typeof x === "string");

/** Keys that stay unique even when the same text appears twice. */
export const occurrenceKeys = (items: string[]): string[] => {
  const seen = new Map<string, number>();
  return items.map((item) => {
    const n = seen.get(item) ?? 0;
    seen.set(item, n + 1);
    return n === 0 ? item : `${item}#${n}`;
  });
};
