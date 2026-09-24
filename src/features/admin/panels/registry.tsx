import { editorPages } from "../editorPages";
import { AssetsPanel } from "./AssetsPanel";
import { BackupPanel } from "./BackupPanel";
import { SchemaPanel } from "./SchemaPanel";
import type { AdminPanel } from "./types";

/** Sidebar entries: every schema page plus custom tools. */
export const adminPanels: AdminPanel[] = [
  ...editorPages.map<AdminPanel>((page) => ({
    id: page.id,
    label: page.label,
    icon: page.icon,
    description: page.description,
    group: "Content",
    render: ({ editor }) => <SchemaPanel page={page} editor={editor} />,
  })),
  {
    id: "assets",
    label: "Photo & Resume",
    icon: "🖼️",
    description: "Upload a new profile photo or resume PDF.",
    group: "Tools",
    render: (ctx) => <AssetsPanel {...ctx} />,
  },
  {
    id: "backup",
    label: "Backup & Reset",
    icon: "💾",
    description: "Export, import or discard your changes.",
    group: "Tools",
    render: (ctx) => <BackupPanel {...ctx} />,
  },
];
