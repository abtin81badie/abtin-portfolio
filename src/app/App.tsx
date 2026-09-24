import { MotionConfig } from "framer-motion";
import { lazy, Suspense } from "react";
import { PortfolioPage } from "../features/portfolio/PortfolioPage";
import { useHashRoute } from "../hooks/useHashRoute";
import { bundledContent } from "../services/content/BundledContentReader";
import { GlobalStyle } from "../theme/GlobalStyle";
import { ThemeModeProvider } from "../theme/ThemeMode";

// The admin panel and preview are split into their own chunks, so visitors
// only download the portfolio itself.
const AdminApp = lazy(() => import("../features/admin/AdminApp"));
const PreviewPage = lazy(() => import("../features/admin/PreviewPage"));

function Routes() {
  const route = useHashRoute();

  if (route.startsWith("/admin")) {
    const panelId = route.split("/")[2] || undefined;
    return <AdminApp panelId={panelId} />;
  }
  if (route.startsWith("/preview")) return <PreviewPage />;
  return <PortfolioPage content={bundledContent} />;
}

export function App() {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      {/* Honors the visitor's "reduce motion" OS setting everywhere. */}
      <MotionConfig reducedMotion="user">
        <Suspense fallback={null}>
          <Routes />
        </Suspense>
      </MotionConfig>
    </ThemeModeProvider>
  );
}
