import React from "react";
import { mainProduct } from "../Data/Banners";
import {cartClick} from "../Components/Latest";



export default function Cart() {
  
  const chosenProduct = mainProduct.map((data) => {
    return <div>
      {data.title}Í
      {/* <h1> {setCartList} </h1> */}
      {/* <p> {cartList}</p> */}
    </div>;
    
  });

  return (
    <div>
      <h1 className="cartTitle"> Cart parts </h1>
      {chosenProduct}
    </div>
  );
}
