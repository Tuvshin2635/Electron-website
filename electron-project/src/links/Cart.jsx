import React from "react";
import { mainProduct } from "../Data/Banners";

export default function Cart(props) {
  console.log(props.cartShop);

  return (
    <div>
      <h1 className="cartTitle">hi</h1>
      {props.cartShop.map((item) => {
        mainProduct.map((product) => {
          if (item === product.id[0]) {
            return (
              <div>
                <p>Title: {product.title}</p>
                <p>Title: {product.thumbnail}</p>
              </div>
            );
          }
        });
      })}
    </div>
  );
}
