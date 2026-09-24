import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PortfolioContent } from "../../domain/content";
import type { ContentPublisher, ContentReader, DraftStore } from "../../services/content/ContentRepository";

interface Options {
  reader: ContentReader;
  publisher?: ContentPublisher;
  drafts: DraftStore;
  preview: DraftStore;
}

export type LoadState = "loading" | "ready" | "error";

/**
 * Owns the editing workflow: load → edit (auto-saved as a local draft) →
 * publish. Knows nothing about GitHub or the UI — only about the interfaces.
 */
export function useContentEditor({ reader, publisher, drafts, preview }: Options) {
  const [published, setPublished] = useState<PortfolioContent | null>(null);
  const [content, setContent] = useState<PortfolioContent | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [loadError, setLoadError] = useState<string>();
  const [restoredDraft, setRestoredDraft] = useState(false);
  const saveTimer = useRef<number | undefined>(undefined);

  const load = useCallback(async () => {
    setLoadState("loading");
    try {
      const remote = await reader.load();
      const draft = drafts.load();
      const hasDraft = draft !== null && JSON.stringify(draft) !== JSON.stringify(remote);
      setPublished(remote);
      setContent(hasDraft ? draft : remote);
      setRestoredDraft(hasDraft);
      setLoadState("ready");
    } catch (error) {
      setLoadError(error instanceof Error ? error.message : String(error));
      setLoadState("error");
    }
  }, [reader, drafts]);

  useEffect(() => {
    void load();
  }, [load]);

  const dirty = useMemo(
    () => content !== null && published !== null && JSON.stringify(content) !== JSON.stringify(published),
    [content, published],
  );

  // Persist the working copy (debounced) so nothing is lost on reload and the
  // live preview can follow along.
  useEffect(() => {
    if (!content) return;
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => {
      preview.save(content);
      if (dirty) drafts.save(content);
      else drafts.clear();
    }, 250);
    return () => window.clearTimeout(saveTimer.current);
  }, [content, dirty, drafts, preview]);

  const update = useCallback(<K extends keyof PortfolioContent>(key: K, value: PortfolioContent[K]) => {
    setContent((current) => (current ? { ...current, [key]: value } : current));
  }, []);

  const replace = useCallback((next: PortfolioContent) => setContent(next), []);

  const discard = useCallback(() => {
    drafts.clear();
    setContent(published);
    setRestoredDraft(false);
  }, [drafts, published]);

  const publish = useCallback(
    async (message: string, force = false) => {
      if (!publisher || !content) throw new Error("Publishing requires signing in with GitHub.");
      const result = await publisher.publish(content, message, { force });
      setPublished(content);
      setRestoredDraft(false);
      drafts.clear();
      return result;
    },
    [publisher, content, drafts],
  );

  return {
    content,
    published,
    loadState,
    loadError,
    restoredDraft,
    dismissRestoredNotice: () => setRestoredDraft(false),
    dirty,
    canPublish: Boolean(publisher),
    reload: load,
    update,
    replace,
    discard,
    publish,
  };
}

export type ContentEditor = ReturnType<typeof useContentEditor>;
