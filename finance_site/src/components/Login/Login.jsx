import React from "react";
import { Button } from "../common/Buttons/Button";
import Header from "../theme/Header";
import { Wrapper, InnerComponent, Head, Logo, Tag, Input } from "./style";

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <InnerComponent>
        <Head>
          <Logo>Finance</Logo>
          <Tag>Sign in</Tag>
        </Head>
        <Input>
          <input type="email" placeholder="Email or Phone" />
          <input type="password" placeholder="Password" />
        </Input>
        <span>Forgot password?</span>
        <Button type="submit">Sign in</Button>
        <p>
          Dont have account? <stong>Sign up Now</stong>
        </p>
      </InnerComponent>
    </Wrapper>
  );
};

export default Login;
