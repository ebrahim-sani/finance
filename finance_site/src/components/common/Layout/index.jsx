import React from "react";
import { Global } from "./styled";

export const Layout = ({ children }) => {
  return (
    <>
      <Global />
      {children}
    </>
  );
};
