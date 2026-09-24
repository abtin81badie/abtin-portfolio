import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import styled from "styled-components";
import { color, radius } from "../../theme/tokens";
import { Icon } from "../../ui/Icon";

type Tone = "success" | "error" | "info";

interface Toast {
  id: number;
  tone: Tone;
  message: ReactNode;
}

const ToastContext = createContext<(message: ReactNode, tone?: Tone) => void>(() => {});

const Stack = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 100;
  display: grid;
  gap: 10px;
  width: min(400px, calc(100vw - 40px));
`;

const toneColor: Record<Tone, string> = { success: "#10b981", error: "#ef4444", info: "#6366f1" };

const Item = styled(motion.div)<{ $tone: Tone }>`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  font-size: 0.9rem;
  border-radius: ${radius.md};
  background: ${color.bgElevated};
  border: 1px solid ${color.border};
  border-left: 4px solid ${({ $tone }) => toneColor[$tone]};
  box-shadow: var(--shadow-md);

  svg {
    flex-shrink: 0;
    margin-top: 1px;
    color: ${({ $tone }) => toneColor[$tone]};
  }

  a {
    color: ${color.primary};
    font-weight: 600;
  }
`;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((message: ReactNode, tone: Tone = "info") => {
    const id = Date.now() + Math.random();
    setToasts((list) => [...list, { id, tone, message }]);
    window.setTimeout(() => setToasts((list) => list.filter((t) => t.id !== id)), tone === "error" ? 9000 : 6000);
  }, []);

  const value = useMemo(() => push, [push]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Stack role="status" aria-live="polite">
        <AnimatePresence>
          {toasts.map((toast) => (
            <Item
              key={toast.id}
              $tone={toast.tone}
              layout
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            >
              <Icon name={toast.tone === "error" ? "close" : toast.tone === "success" ? "check" : "sparkles"} size={18} />
              <div>{toast.message}</div>
            </Item>
          ))}
        </AnimatePresence>
      </Stack>
    </ToastContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext);
