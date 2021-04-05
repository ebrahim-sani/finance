import React from "react";
import { Card, Head, Body, Recieved, Spent } from "./style";

const SecondCard = () => {
  return (
    <Card>
      <Head>
        <h4>Spendings</h4>
        <p>This month</p>
      </Head>

      <Body>
        <Recieved>
          <p>Total Money Recieved</p>
          <span>$ 0.00</span>
        </Recieved>
        <Spent>
          <p>Total Money Spent</p>
          <span>$ 0.00</span>
        </Spent>
      </Body>
    </Card>
  );
};

export default SecondCard;
