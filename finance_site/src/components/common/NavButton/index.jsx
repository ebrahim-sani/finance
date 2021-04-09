import { Link } from "gatsby";
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
  @media (max-width: 760px) {
    display: none;
  }
`;

const NavButton = () => {
  return (
    <Buttons>
      <Link to="/signup">
        <span>Sign up</span>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
    </Buttons>
  );
};

export default NavButton;
