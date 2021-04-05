import React from "react";
import styled from "styled-components";
import Navbar from "../components/theme/Header/Navbar/Navbar";
const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar />
      <h3>Dashboard</h3>
    </Wrapper>
  );
};
export default Dashboard;

const Wrapper = styled.div``;
