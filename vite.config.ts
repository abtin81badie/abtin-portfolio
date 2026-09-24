import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/abtin-portfolio/",
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks: content edits only invalidate the app chunk.
        manualChunks: {
          react: ["react", "react-dom", "react-dom/client"],
          motion: ["framer-motion"],
          styled: ["styled-components"],
        },
      },
    },
  },
});
