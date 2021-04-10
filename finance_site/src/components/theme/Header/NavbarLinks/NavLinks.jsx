import { Link } from "gatsby";
import React from "react";
import { Wrapper } from "./styles";

const NavbarLinks = ({ Desktop }) => {
  return (
    <Wrapper desktop={Desktop}>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/#about">
        <span>About</span>
      </Link>
      <Link to="/#features">
        <span>Feature</span>
      </Link>
      <Link to="/#services">
        <span>Services</span>
      </Link>
      <Link to="/">
        <span>Contact</span>
      </Link>
    </Wrapper>
  );
};

export default NavbarLinks;
