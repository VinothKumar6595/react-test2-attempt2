import React, { useContext } from "react";
import classes from "./Header.module.css";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import CartContext from "../store/Cart-Context";

const Header = (props) => {
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.cartItems.reduce((current, item) => {
    return current + Number(item.Quantity);
  }, 0);

  return (
    <header className={classes.header}>
      <h1>MEDICINE INVENTORY</h1>
      <button onClick={props.onShowCart} className={classes.button}>
        <span>
          <ShoppingCartTwoToneIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </header>
  );
};

export default Header;
