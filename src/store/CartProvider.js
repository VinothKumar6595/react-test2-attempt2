import React, { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const [list, setList] = useState([]);
  const addToListHandler = (listItem) => {
    setList((prevList) => {
      return [...prevList, listItem];
    });
  };
  const [cartitems, setCartItems] = useState([]);
  const addToCartHandler = (item) => {
    const existingItemIndex = cartitems.findIndex((med) => {
      return med.id === item.id;
    });
    const existingItem = cartitems[existingItemIndex];
    let updateditem;
    let updatedItems;
    if (existingItem) {
      updateditem = {
        ...existingItem,
        Quantity: Number(existingItem.Quantity) + Number(item.Quantity),
      };
      updatedItems = [...cartitems];
      updatedItems[existingItemIndex] = updateditem;
      setCartItems(updatedItems);
    } else
      setCartItems((prev) => {
        return [...prev, item];
      });
  };

  const clearCartHandler = () => {
    setCartItems([]);
  };

  console.log(list);
  console.log(cartitems);
  const cartContext = {
    medItems: list,
    cartItems: cartitems,
    addToList: addToListHandler,
    addToCart: addToCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
