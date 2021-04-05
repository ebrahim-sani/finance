import React from "react";
import { Wrapper, Head, Title } from "./style";
import { Button } from "../../common/Buttons/Button";

const Main = () => {
  return (
    <Wrapper>
      <Head>
        <Title>
          <span>Home</span>
          <span>Welcome back, Ebrahim</span>
        </Title>
        <Button>Funds Finance Balance</Button>
      </Head>
    </Wrapper>
  );
};

export default Main;
