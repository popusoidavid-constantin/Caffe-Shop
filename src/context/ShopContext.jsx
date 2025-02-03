import React from "react";
import { products } from "./assets/assets";

const ShopContext = (props) => {
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContext;
