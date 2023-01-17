import React from "react";
import { mainProduct } from "../Data/Banners";

export default function Cart() {
  
  const chosenProduct = mainProduct.map((data) => {
    return <div>{data.title}</div>;
  });

  return (
    <div>
      <h1 className="cartTitle"> Cart parts </h1>
      {chosenProduct}
    </div>
  );
}
