import { motion } from "framer-motion";
import styled from "styled-components";
import type { SocialLink } from "../../../domain/content";
import { color, gradient } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";
import { scaleIn, stagger } from "../../../ui/variants";

const List = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
`;

const Link = styled(motion.a)`
  position: relative;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  color: ${color.heading};
  background: var(--surface);
  border: 1px solid ${color.border};
  backdrop-filter: blur(10px);
  overflow: hidden;
  isolation: isolate;
  transition: color 0.25s ease, border-color 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${gradient.brand};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: #fff;
    border-color: transparent;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const isExternal = (url: string) => /^https?:/.test(url);

export function SocialLinks({ links, delay = 0 }: { links: SocialLink[]; delay?: number }) {
  return (
    <List initial="hidden" animate="show" variants={stagger(0.08, delay)}>
      {links.map((link) => (
        <motion.li key={`${link.icon}-${link.url}`} variants={scaleIn}>
          <Link
            href={link.url}
            aria-label={link.label}
            title={link.label}
            {...(isExternal(link.url) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            whileHover={{ y: -4, rotate: -4 }}
            whileTap={{ scale: 0.92 }}
          >
            <Icon name={link.icon} />
          </Link>
        </motion.li>
      ))}
    </List>
  );
}
