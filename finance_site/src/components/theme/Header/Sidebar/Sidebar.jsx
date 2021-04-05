import React from "react";
import NavbarLinks from "../NavbarLinks/NavLinks";
import { Wrapper } from "./styles";

const Sidebar = ({ sidebar, toggle }) => {
  return (
    <Wrapper active={sidebar} onClick={toggle}>
      <NavbarLinks />
    </Wrapper>
  );
};

export default Sidebar;
