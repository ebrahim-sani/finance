import React from "react";
import styled from "styled-components";
import { Button } from "../Buttons/Button";

const Buttons = styled.div`
  span {
    padding: 0 10px;
    color: black;
    font-weight: 550;
    cursor: pointer;
  }
`;

const NavButton = () => {
  return (
    <Buttons>
      <span>Sign up</span>
      <Button>Login</Button>
    </Buttons>
  );
};

export default NavButton;
