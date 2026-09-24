import { useRef } from "react";

let counter = 0;
const nextKey = () => `k${++counter}`;

/**
 * React keys that follow list items through reorders/inserts/deletes, so
 * items animate to their new position instead of re-mounting.
 */
export function useStableKeys(length: number) {
  const keys = useRef<string[]>([]);
  if (keys.current.length !== length) {
    // External change (import, reset…) — resync.
    keys.current = Array.from({ length }, (_, i) => keys.current[i] ?? nextKey());
  }

  return {
    keys: keys.current,
    move(from: number, to: number) {
      const next = [...keys.current];
      const [key] = next.splice(from, 1);
      next.splice(to, 0, key);
      keys.current = next;
    },
    insert(index: number) {
      const next = [...keys.current];
      next.splice(index, 0, nextKey());
      keys.current = next;
    },
    remove(index: number) {
      keys.current = keys.current.filter((_, i) => i !== index);
    },
  };
}
