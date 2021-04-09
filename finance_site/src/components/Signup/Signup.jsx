import { Link } from "gatsby";
import React, { useRef } from "react";
import { auth } from "../../firebase";
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
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

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
            <input type="email" ref={emailRef} placeholder="Email or Phone" />
            <input type="password" ref={passwordRef} placeholder="Password" />

            <span>Forgot password?</span>
            <Button onClick={signUp}>Sign up</Button>
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
