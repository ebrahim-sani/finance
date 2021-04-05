import { Link } from "gatsby";
import React from "react";
import { Wrapper } from "./styles";

const NavbarLinks = ({ Desktop }) => {
  return (
    <Wrapper desktop={Desktop}>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/#feature">
        <span>Feature</span>
      </Link>
      <Link to="/#service">
        <span>Services</span>
      </Link>
      <Link to="/contact">
        <span>Contact</span>
      </Link>
    </Wrapper>
  );
};

export default NavbarLinks;
