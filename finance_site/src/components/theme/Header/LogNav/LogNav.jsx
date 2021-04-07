import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

//style start;
const Component = styled.div`
  padding: 20px 0;
  background: #fff;
`;
const InnerComponent = styled.div`
  margin: 0 100px;

  @media (max-width: 960px) {
    margin: 0 70px;
  }
  @media (max-width: 760px) {
    margin: 0 40px;
  }
`;
const Logo = styled.h3`
  justify-content: flex-start;
  color: black;
`;
//style end

const LogNav = () => {
  return (
    <Component>
      <InnerComponent>
        <Link to="/">
          <Logo>Finance</Logo>
        </Link>
      </InnerComponent>
    </Component>
  );
};

export default LogNav;
