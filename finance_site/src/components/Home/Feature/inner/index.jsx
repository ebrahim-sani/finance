import React from "react";
import { GrStatusGood } from "react-icons/gr";
import {
  Wrapper,
  Container,
  Icon,
  Heading,
  LittleDesc,
  CheckList,
  CheckListCont,
} from "./styles";

const FeatureProp = ({
  icon,
  heading,
  littleDesc,
  checkListOne,
  checkListTwo,
  checkListThree,
}) => {
  return (
    <Wrapper>
      <Container>
        <Icon>{icon}</Icon>
        <Heading>{heading}</Heading>
        <LittleDesc>{littleDesc}</LittleDesc>
        <CheckList>
          <CheckListCont>
            <GrStatusGood
              style={{
                fontSize: "40px",
                color: "black",
                marginRight: "8px",
                position: "relative",
                bottom: "9px",
              }}
            />
            <p>{checkListOne}</p>
          </CheckListCont>
          <CheckListCont>
            <GrStatusGood
              style={{
                fontSize: "40px",
                color: "#008000",
                marginRight: "8px",
                position: "relative",
                bottom: "9px",
              }}
            />
            <p>{checkListTwo}</p>
          </CheckListCont>
          <CheckListCont>
            <GrStatusGood
              style={{
                fontSize: "40px",
                color: "green",
                marginRight: "8px",
                position: "relative",
                bottom: "9px",
              }}
            />
            <p>{checkListThree}</p>
          </CheckListCont>
        </CheckList>
      </Container>
    </Wrapper>
  );
};

export default FeatureProp;
