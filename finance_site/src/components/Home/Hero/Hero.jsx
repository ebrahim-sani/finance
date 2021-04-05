import React from "react";
import Header from "../../theme/Header/index";
import strategic_finance from "../../../assets/images/strategic_finance.jpg";
import { Wrapper, InnerWrapper, HeroImage, HeroIntro, Buttons } from "./styles";
import { Button, WButton } from "../../common/Buttons/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <Header />
      <InnerWrapper>
        <HeroIntro>
          <span>Control with Finance</span>
          <h2>Smart Savings Assistant</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cum
            natus illum voluptas tempora assumenda enim quasi mollitia
            excepturi, architecto dolor molestias dolore nostrum deleniti
            perspiciatis rerum sapiente iusto. Ea?
          </p>
          <Buttons>
            <Button>Get Started</Button>
            <WButton
              style={{
                marginLeft: 12,
              }}
            >
              Watch Video
            </WButton>
          </Buttons>
        </HeroIntro>
        <HeroImage>
          <img src={strategic_finance} alt="" />
        </HeroImage>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HeroSection;
