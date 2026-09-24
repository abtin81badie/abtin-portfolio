import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import styled, { css } from "styled-components";
import { color, gradient, radius } from "../theme/tokens";

export type ButtonVariant = "primary" | "ghost" | "subtle" | "danger";

const variants = {
  primary: css`
    color: #fff;
    background: ${gradient.brand};
    background-size: 160% 100%;
    background-position: 0% 50%;
    border: 1px solid transparent;
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.35);

    &:hover:not(:disabled) {
      background-position: 100% 50%;
      box-shadow: 0 14px 40px rgba(236, 72, 153, 0.35);
    }
  `,
  ghost: css`
    color: ${color.heading};
    background: ${color.surface};
    border: 1px solid ${color.borderStrong};
    backdrop-filter: blur(10px);

    &:hover:not(:disabled) {
      border-color: ${color.primary};
      color: ${color.primary};
    }
  `,
  subtle: css`
    color: ${color.text};
    background: transparent;
    border: 1px solid ${color.border};

    &:hover:not(:disabled) {
      background: ${color.surface};
      border-color: ${color.borderStrong};
    }
  `,
  danger: css`
    color: #ef4444;
    background: transparent;
    border: 1px solid rgba(239, 68, 68, 0.35);

    &:hover:not(:disabled) {
      background: rgba(239, 68, 68, 0.08);
    }
  `,
};

const base = css<{ $variant: ButtonVariant; $size: "sm" | "md" }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $size }) => ($size === "sm" ? "8px 14px" : "13px 24px")};
  font-size: ${({ $size }) => ($size === "sm" ? "0.85rem" : "0.95rem")};
  font-weight: 600;
  border-radius: ${radius.pill};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background-position 0.5s ease, box-shadow 0.3s ease, border-color 0.25s ease,
    color 0.25s ease, background-color 0.25s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 1.1em;
    height: 1.1em;
    flex-shrink: 0;
  }

  ${({ $variant }) => variants[$variant]}
`;

const tap = { scale: 0.96 };
const hover = { y: -2 };

const StyledButton = styled(motion.button)<{ $variant: ButtonVariant; $size: "sm" | "md" }>`
  ${base}
`;
const StyledLink = styled(motion.a)<{ $variant: ButtonVariant; $size: "sm" | "md" }>`
  ${base}
`;
const StyledLabel = styled(motion.label)<{ $variant: ButtonVariant; $size: "sm" | "md"; $disabled?: boolean }>`
  ${base}
  ${({ $disabled }) => $disabled && "opacity: 0.5; pointer-events: none;"}

  input[type="file"] {
    display: none;
  }
`;

type Common = { variant?: ButtonVariant; size?: "sm" | "md" };
type Own = "$variant" | "$size";

export function Button({
  variant = "ghost",
  size = "md",
  type = "button",
  ...props
}: Common & Omit<ComponentProps<typeof StyledButton>, Own>) {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      $size={size}
      whileTap={props.disabled ? undefined : tap}
      whileHover={props.disabled ? undefined : hover}
      {...props}
    />
  );
}

export function ButtonLink({ variant = "ghost", size = "md", ...props }: Common & Omit<ComponentProps<typeof StyledLink>, Own>) {
  return <StyledLink $variant={variant} $size={size} whileTap={tap} whileHover={hover} {...props} />;
}

/** A <label> styled as a button — wrap a hidden file input in it. */
export function ButtonLabel({
  variant = "ghost",
  size = "md",
  disabled,
  ...props
}: Common & { disabled?: boolean } & Omit<ComponentProps<typeof StyledLabel>, Own | "$disabled">) {
  return (
    <StyledLabel
      $variant={variant}
      $size={size}
      $disabled={disabled}
      whileTap={disabled ? undefined : tap}
      whileHover={disabled ? undefined : hover}
      {...props}
    />
  );
}
