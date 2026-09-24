import type { ReactNode } from "react";
import type { AssetUploader } from "../../../services/content/ContentRepository";
import type { ContentEditor } from "../useContentEditor";

export interface PanelContext {
  editor: ContentEditor;
  uploader?: AssetUploader;
}

/** One entry in the admin sidebar. Schema forms and custom tools share this shape. */
export interface AdminPanel {
  id: string;
  label: string;
  icon: string;
  description: string;
  group: "Content" | "Tools";
  render: (ctx: PanelContext) => ReactNode;
}
