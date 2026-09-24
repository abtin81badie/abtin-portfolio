import styled, { keyframes } from "styled-components";
import { gradient } from "../theme/tokens";

const shift = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
`;

/** Text filled with the brand gradient, optionally slowly flowing. */
export const GradientText = styled.span<{ $animated?: boolean }>`
  background: ${({ $animated }) => ($animated ? gradient.brandAnimated : gradient.brand)};
  background-size: ${({ $animated }) => ($animated ? "200% auto" : "100% auto")};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: ${({ $animated }) => ($animated ? shift : "none")} 8s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
