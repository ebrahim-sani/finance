import React from "react";
import flow_analysis from "../../../../../assets/images/flow_analysis.jpg";
import { Wrapper, Intro, Image } from "./styles";
import { Button } from "../../../../common/Buttons/Button";

const SmallIntroThree = () => {
  return (
    <Wrapper>
      <Image>
        <img src={flow_analysis} alt="" />
      </Image>
      <Intro>
        <span>Everything Under Control</span>
        <h2>Be Smart Manage Your Cash Flow</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          soluta, nulla nam illum laborum esse assumenda repellendus architecto
          suscipit eveniet fuga perspiciatis possimus est minima porro ea error
          aliquid voluptatum molestias quasi doloribus. Assumenda, quo? Dolorem
          distinctio blanditiis neque sunt.
        </p>
        <Button>See More</Button>
      </Intro>
    </Wrapper>
  );
};

export default SmallIntroThree;
