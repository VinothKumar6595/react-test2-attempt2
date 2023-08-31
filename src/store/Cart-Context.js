import React from "react";

const CartContext = React.createContext({
  medItems: [],
  cartItems: [],
  addToList: (item) => {},
  addToCart: (item) => {},
  clearCart: () => {},
});

export default CartContext;
