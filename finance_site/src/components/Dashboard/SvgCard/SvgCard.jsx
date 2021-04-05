import React from "react";
import undraw_pay from "../../../assets/Illustrations/undraw_pay.svg";
import { Card, Head, Svg } from "./style";

const SvgCard = () => {
  return (
    <Card>
      <Head>Transactiions</Head>
      <Svg>
        <img src={undraw_pay} alt="" />
      </Svg>
    </Card>
  );
};

export default SvgCard;
