import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { useScrollTo } from "../../../hooks/useScrollTo";
import { useThemeMode } from "../../../theme/ThemeMode";
import { color, ease, font, gradient, layout, radius } from "../../../theme/tokens";
import { Icon } from "../../../ui/Icon";
import { useContent } from "../ContentContext";

const COLLAPSE = "@media (max-width: 1100px)";

const Bar = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: ${layout.navHeight};
  display: flex;
  align-items: center;
  transition: background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
  background: ${({ $scrolled }) => ($scrolled ? "var(--surface)" : "transparent")};
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? color.border : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(18px) saturate(160%)" : "none")};
  -webkit-backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(18px) saturate(160%)" : "none")};
`;

const Inner = styled.nav`
  width: 100%;
  max-width: ${layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${layout.gutter};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Logo = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: none;
  border: 0;
  cursor: pointer;
  font-family: ${font.display};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${color.heading};
`;

const Monogram = styled.span`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 11px;
  color: #fff;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  background: ${gradient.brand};
  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.4);
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 2px;
  list-style: none;
  padding: 5px;
  border-radius: ${radius.pill};
  border: 1px solid ${color.border};
  background: var(--surface);
  backdrop-filter: blur(12px);

  ${COLLAPSE} {
    display: none;
  }
`;

const LinkButton = styled.button<{ $active: boolean }>`
  position: relative;
  padding: 7px 13px;
  font-size: 0.86rem;
  font-weight: 500;
  border: 0;
  border-radius: ${radius.pill};
  background: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#fff" : color.textMuted)};
  transition: color 0.25s ease;

  &:hover {
    color: ${({ $active }) => ($active ? "#fff" : color.heading)};
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

const ActivePill = styled(motion.div)`
  position: absolute;
  inset: 0;
  border-radius: ${radius.pill};
  background: ${gradient.brand};
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconButton = styled(motion.button)`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${color.border};
  background: var(--surface);
  color: ${color.heading};
  cursor: pointer;
  backdrop-filter: blur(12px);
`;

const MenuButton = styled(IconButton)`
  display: none;
  ${COLLAPSE} {
    display: grid;
  }
`;

const Drawer = styled(motion.div)`
  position: fixed;
  inset: ${layout.navHeight} 0 0 0;
  z-index: 49;
  padding: 24px ${layout.gutter};
  background: var(--bg);
  overflow-y: auto;
`;

const DrawerLink = styled(motion.button)<{ $active: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 14px;
  width: 100%;
  padding: 14px 4px;
  font-family: ${font.display};
  font-size: 1.6rem;
  font-weight: 600;
  text-align: left;
  border: 0;
  border-bottom: 1px solid ${color.border};
  background: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? color.primary : color.heading)};

  small {
    font-family: ${font.mono};
    font-size: 0.75rem;
    color: ${color.textMuted};
  }
`;

export function Navbar() {
  const { profile, sections } = useContent();
  const items = sections.filter((s) => s.visible);
  const active = useActiveSection(items.map((s) => s.id));
  const scrollTo = useScrollTo();
  const { mode, toggle } = useThemeMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  const initials = profile.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <Bar
        $scrolled={scrolled || open}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: ease.out }}
      >
        <Inner aria-label="Main">
          <Logo onClick={() => go("top")} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Monogram>{initials}</Monogram>
            {profile.name}
          </Logo>

          <Links>
            {items.map((item) => (
              <li key={item.id}>
                <LinkButton $active={active === item.id} onClick={() => go(item.id)}>
                  {active === item.id && (
                    <ActivePill layoutId="nav-pill" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <span>{item.navLabel || item.title}</span>
                </LinkButton>
              </li>
            ))}
          </Links>

          <Actions>
            <IconButton
              onClick={toggle}
              aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mode}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: "grid" }}
                >
                  <Icon name={mode === "dark" ? "sun" : "moon"} size={18} />
                </motion.span>
              </AnimatePresence>
            </IconButton>
            <MenuButton
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              whileTap={{ scale: 0.9 }}
            >
              <Icon name={open ? "close" : "menu"} size={18} />
            </MenuButton>
          </Actions>
        </Inner>
      </Bar>

      <AnimatePresence>
        {open && (
          <Drawer
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: ease.out }}
          >
            {items.map((item, i) => (
              <DrawerLink
                key={item.id}
                $active={active === item.id}
                onClick={() => go(item.id)}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i, duration: 0.4, ease: ease.out }}
              >
                <small>{String(i + 1).padStart(2, "0")}</small>
                {item.navLabel || item.title}
              </DrawerLink>
            ))}
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
