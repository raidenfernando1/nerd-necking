import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

const Nav = {
  Container: styled.nav`
    margin-top: 50px;
    padding-top: 10px;
    border-top: 1px solid var(--bd-color);
    display: flex;
    gap: 20px;

    > a {
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

interface NavbarProps {
  navItems: NavbarItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  return (
    <Nav.Container>
      {navItems.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
    </Nav.Container>
  );
};

export default Navbar;
