import React from "react";
import FeatureProp from "./inner";
import { FaServicestack } from "react-icons/fa";
import styled from "styled-components";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";

// style
const Wrapper = styled.div`
  margin: 0 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;

  @media (max-width: 760px), (max-width: 680px) {
    display: flex;
    flex-direction: column;
    margin: 0 30px;
  }
`;

const Feature = () => {
  return (
    <Wrapper>
      <FeatureProp
        icon={
          <FaServicestack
            style={{
              color: "black",
              marginBottom: "10px",
              padding: "12px 18px",
              background: "#ededed",
              fontSize: "24px",
            }}
          />
        }
        heading="Bookkeeping Cleaning Service"
        littleDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, provident."
        checkListOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
        checkListTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
        checkListThree="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
      />
      <FeatureProp
        icon={
          <IoDocumentTextSharp
            style={{
              color: "black",
              marginBottom: "10px",
              padding: "12px 18px",
              background: "#ededed",
              fontSize: "24px",
            }}
          />
        }
        heading="Custom Real Time Report"
        littleDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, provident."
        checkListOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
        checkListTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
        checkListThree="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
      />
      <FeatureProp
        icon={
          <RiBankFill
            style={{
              color: "black",
              marginBottom: "10px",
              padding: "12px 18px",
              background: "#ededed",
              fontSize: "24px",
            }}
          />
        }
        heading="Work Around Worldwide Bank"
        littleDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, provident."
        checkListOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
        checkListTwo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
        checkListThree="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
      aliquam at delectus?"
      />
    </Wrapper>
  );
};

export default Feature;
