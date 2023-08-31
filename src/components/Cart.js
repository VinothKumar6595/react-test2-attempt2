import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/Cart-Context";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartList = ctx.cartItems.map((item) => {
    return (
      <li key={item.id}>
        <span>MedicineName : {item.medName}</span>
        <span>Quantity: {item.Quantity}</span>
        <span>Price: {item.Quantity * item.price}</span>
      </li>
    );
  });

  const totalAmount = ctx.cartItems.reduce((current, item) => {
    return current + Number(item.price * item.Quantity);
  }, 0);

  return (
    <Modal onClick={props.onHideCart}>
      <div>
        <ul className={classes.list}>{cartList}</ul>
        <span className={classes.amount}>
          <h3>Total Amount - Rs.{totalAmount.toFixed(2)}</h3>
        </span>
      </div>
      <div className={classes.button}>
        <button onClick={ctx.clearCart}>Place Order</button>
        <button onClick={props.onHideCart}>Cancel</button>
      </div>
    </Modal>
  );
};

export default Cart;
