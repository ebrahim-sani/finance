import { Link } from "gatsby";
import React from "react";
import { Button } from "../common/Buttons/Button";
import LogNav from "../theme/Header/LogNav/LogNav";
import {
  Wrapper,
  InnerComponent,
  Head,
  Logo,
  Tag,
  Input,
  Quest,
} from "./style";

const Signup = () => {
  return (
    <Wrapper>
      <LogNav />
      <InnerComponent>
        <Head>
          <Logo>Finance</Logo>
          <Tag>Sign up</Tag>
        </Head>
        <form>
          <Input>
            <input type="email" placeholder="Email or Phone" />
            <input type="password" placeholder="Password" />

            <span>Forgot password?</span>
            <Button type="submit">Sign up</Button>
          </Input>
        </form>
        <Quest>
          <p>Do you have account?</p>
          <Link to="/login">
            <span>Login here</span>
          </Link>
        </Quest>
      </InnerComponent>
    </Wrapper>
  );
};

export default Signup;
