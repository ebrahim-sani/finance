import React from "react";
import Main from "./MainDash/Main";
import Nav from "./Nav/Nav";
import SideLinks from "./Sidebar/SideLinks";
import { Wrapper, Body, Sidebar, MainDash } from "./styles";

const Dashboard = () => {
  return (
    <Wrapper>
      <Nav />
      <Body>
        <Sidebar>
          <SideLinks />
        </Sidebar>
        <MainDash>
          <Main />
        </MainDash>
      </Body>
    </Wrapper>
  );
};

export default Dashboard;
