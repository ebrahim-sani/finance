import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonCircle } from "react-icons/io5";
import { Wrapper, InnerComponents, Logo, NavLeft } from "./styles";

const Nav = () => {
  return (
    <Wrapper>
      <InnerComponents>
        <Logo>Finance</Logo>
        <NavLeft>
          <IoNotificationsOutline
            style={{ fontSize: 30, color: "#000000", cursor: "pointer" }}
          />
          <IoPersonCircle
            style={{
              fontSize: 43,
              color: "#000000",
              marginLeft: 10,
              cursor: "pointer",
            }}
          />
          <span>Ebrahim Sani</span>
        </NavLeft>
      </InnerComponents>
    </Wrapper>
  );
};

export default Nav;
