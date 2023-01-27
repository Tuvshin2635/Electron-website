import React from "react";
import "./Cart.css";

export default function Cart(props) {
  console.log(props.cartShop);

  return (
    <div>
      <div className="cartHeaderContainer">
        <div className="cartHeader">
          <p> Product</p>
          <p> Price</p>
          <p> Quantity</p>
          <p> SubTotal</p>
        </div>

        <div>
          <p> Cart Total </p>
        </div>
          <p> Subtotal </p>
      </div>
      {props.cartShop.map((item) => {
        return (
          <div>
            <div className="cartContainer">
              <div className="cartImg">
                <img className="cartTumbnail" src={item.thumbnail} />
              </div>
              <div className="cartDescription">
                <h1 className="cartTitle"> {item.title} </h1>
                <h1 className="cartPrice"> $ {item.price} </h1>
                <h1 className="cartSize"> Size: {item.size} </h1>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
