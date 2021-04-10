import React from "react";
import transaction from "../../../../../assets/images/transaction.png";
import { Wrapper, Intro, Image } from "./styles";
import { Button } from "../../../../common/Buttons/Button";

const SmallIntroTwo = () => {
  return (
    <Wrapper id="services">
      <Intro>
        <span>Good Security and Protection</span>
        <h2>Custom Protection and Safe Transaction.</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          odit officiis ipsam cupiditate neque illum eos quaerat doloribus
          reiciendis ea quas. Veritatis repellendus sequi totam quidem.
          Provident eius culpa quam maiores facilis consectetur nam natus
          voluptates reprehenderit, molestiae ullam sed?
        </p>
        <Button style={{ width: "100px", marginBottom: "20px" }}>
          Learn More
        </Button>
      </Intro>
      <Image>
        <img src={transaction} alt="" />
      </Image>
    </Wrapper>
  );
};

export default SmallIntroTwo;
