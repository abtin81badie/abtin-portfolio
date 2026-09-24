import { useEffect, useState } from "react";
import styled from "styled-components";
import { bundledContent } from "../../services/content/BundledContentReader";
import { gradient, radius } from "../../theme/tokens";
import { PortfolioPage } from "../portfolio/PortfolioPage";
import { previewStore } from "./services";

const Ribbon = styled.a`
  position: fixed;
  left: 50%;
  bottom: 18px;
  z-index: 70;
  translate: -50% 0;
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  border-radius: ${radius.pill};
  background: ${gradient.brand};
  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.45);
`;

/** Renders the portfolio from the admin's working copy and live-updates as it changes. */
export default function PreviewPage() {
  const [content, setContent] = useState(() => previewStore.load() ?? bundledContent);

  useEffect(() => previewStore.subscribe((next) => setContent(next ?? bundledContent)), []);

  const embedded = window.self !== window.top;

  return (
    <>
      <PortfolioPage content={content} />
      {!embedded && <Ribbon href="#/admin">Preview · back to admin</Ribbon>}
    </>
  );
}
