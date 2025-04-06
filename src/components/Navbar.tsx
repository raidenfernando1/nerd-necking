import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

const Nav = {
  Container: styled.nav`
    margin-top: 50px;
    padding-top: 10px;
    border-top: 1px solid var(--bd-color);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    > a {
      padding: 5px 10px;
      border: 1px solid var(--bd-color);
      text-decoration: none;
    }

    > button {
      text-align: left;
      padding: 5px 10px;
      border: 1px solid var(--bd-color);
      text-decoration: none;
    }
  `,
};

interface NavbarItem {
  name: string;
  path: string;
}

interface ButtonItem {
  name: string;
  onClick: () => void;
}

interface NavbarProps {
  navItems: NavbarItem[];
  buttonItems?: ButtonItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems, buttonItems }) => {
  return (
    <Nav.Container>
      {navItems.map((link, index) => (
        <Link key={index} to={link.path}>
          {link.name}
        </Link>
      ))}
      {buttonItems &&
        buttonItems.map((button, index) => (
          <button key={index} onClick={button.onClick}>
            {button.name}
          </button>
        ))}
    </Nav.Container>
  );
};

export default Navbar;
