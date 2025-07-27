import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Nav = styled.nav`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

const NavLogo = styled(Link)`
  color: #333;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
  }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #ffffff;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #007bff;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // This function flips the menu state (open/close)
  const toggle = () => setIsOpen(!isOpen);

  // This function specifically closes the menu
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="hero"
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          Abtin Badie
        </NavLogo>
        <MobileIcon onClick={toggle}>
          {isOpen ? <>&#10005;</> : <>&#9776;</>}
        </MobileIcon>
        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks
              to="aboutme"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              About Me
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="education"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Education
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="researchinterests"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Research
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="experience"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Experience
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="projects"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Projects
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="skills"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Skills
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="resume"
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
            >
              Resume
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
