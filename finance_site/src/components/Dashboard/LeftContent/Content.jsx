import React from "react";
import { Card, Head, Balance, Link } from "./style";

const FirstCard = () => {
  return (
    <Card>
      <Head>Your Finance Balance</Head>
      <Balance>$ 0.00</Balance>
      <Link>Fund Your Balance</Link>
    </Card>
  );
};

export default FirstCard;
