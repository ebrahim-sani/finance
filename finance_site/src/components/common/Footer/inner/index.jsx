import React from "react";
import styled from "styled-components";

// style
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding-right: 5px;
  color: #fff;
`;
const IconName = styled.span`
  color: #fff;
  font-size: 17px;
`;

const Social = ({ icon, name }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <IconName>{name}</IconName>
    </Wrapper>
  );
};

export default Social;
