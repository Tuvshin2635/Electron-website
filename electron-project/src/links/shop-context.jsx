import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { mainProduct } from "../Data/Banners";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i<mainProduct.length +1 ; i++) {
        cart[i] = 0 
    }
    return cart;
}

export const ShopContextProvider = () => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
};

const removeToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }));
};

const contexValue = { cartItems, addToCart, removeToCart }
console.log(cartItems);


  return <ShopContextProvider value={contexValue} >{}</ShopContextProvider>;
};
