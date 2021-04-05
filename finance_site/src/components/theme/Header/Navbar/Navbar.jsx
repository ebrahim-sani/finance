import { Link } from "gatsby";
import React from "react";
import NavButton from "../../../common/NavButton";
import NavbarLinks from "../NavbarLinks/NavLinks";
import { Wrapper, Brand } from "./styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/">
        <Brand>
          <h3>Finance</h3>
        </Brand>
      </Link>
      <NavbarLinks Desktop />
      <NavButton />
    </Wrapper>
  );
};
export default Navbar;
