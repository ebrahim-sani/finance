import React from "react";
import styled from "styled-components";
import SmallIntroOne from "./components/IntroOne/SmallIntro";
import SmallIntroThree from "./components/IntroThree/IntroThree";
import SmallIntroTwo from "./components/IntroTwo/IntroTwo";

const Wrapper = styled.div``;

export function SmallIntro() {
  return (
    <Wrapper>
      <SmallIntroOne />
      <SmallIntroTwo />
      <SmallIntroThree />
    </Wrapper>
  );
}
