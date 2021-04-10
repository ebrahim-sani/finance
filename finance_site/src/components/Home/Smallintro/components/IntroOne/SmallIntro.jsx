import React from "react";
import finance from "../../../../../assets/images/finance.jpg";
import { Wrapper, Intro, Image } from "./styles";
import { Button } from "../../../../common/Buttons/Button";

const SmallIntroOne = () => {
  return (
    <Wrapper id="about">
      <Image>
        <img src={finance} alt="" />
      </Image>
      <Intro>
        <span>Why It's Important</span>
        <h2>Great Start with Finance</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cum natus
          illum voluptas tempora assumenda enim quasi mollitia excepturi,
          architecto dolor molestias dolore nostrum deleniti perspiciatis rerum
          sapiente iusto. Ea?
        </p>
        <Button style={{ width: "100px" }}>Learn More</Button>
      </Intro>
    </Wrapper>
  );
};

export default SmallIntroOne;
