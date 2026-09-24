import { useCallback } from "react";

/** Smoothly scrolls to a section without polluting the URL hash (keeps routing clean). */
export function useScrollTo() {
  return useCallback((id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
}
