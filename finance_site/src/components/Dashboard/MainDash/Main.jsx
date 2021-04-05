import React from "react";
import {
  Wrapper,
  Head,
  Title,
  Btn,
  InnerComponent,
  LeftContent,
  RightContent,
  FirstContent,
  SecondContent,
  MainDashboard,
} from "./style";
import { Button } from "../../common/Buttons/Button";
import FirstCard from "../LeftContent/Content";
import SecondCard from "../RighContent/Content";
import SvgCard from "../SvgCard/SvgCard";

const Main = () => {
  return (
    <Wrapper>
      <InnerComponent>
        <Head>
          <Title>
            <h3>Home</h3>
            <span>Welcome back, Ebrahim</span>
          </Title>
          <Btn>
            <Button>Funds Your Balance</Button>
          </Btn>
        </Head>
        <MainDashboard>
          <LeftContent>
            <FirstContent>
              <FirstCard />
            </FirstContent>
            <SecondContent>
              <SecondCard />
            </SecondContent>
          </LeftContent>
          <RightContent>
            <SvgCard />
          </RightContent>
        </MainDashboard>
      </InnerComponent>
    </Wrapper>
  );
};

export default Main;
