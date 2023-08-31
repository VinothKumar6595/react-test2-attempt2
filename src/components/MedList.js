import React, { Fragment, useContext, useState } from "react";
import CartContext from "../store/Cart-Context";
import Button from "../UI/Button";
import classes from "./MedList.module.css";
import Input from "./Input";

const MedList = (props) => {
  const ctx = useContext(CartContext);
  const [input, setInput] = useState("");
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const addToCartHandler = (item) => {
    ctx.addToCart({ ...item, Quantity: input });
  };
  const listOfMed = ctx.medItems.map((item) => {
    return (
      <li key={item.id}>
        <div className={classes.order}>
          <span>Medicine Name : {item.medName}</span>
          <span>Medicine Description : {item.medDesc}</span>
          <span>Price : {item.price}</span>
          <Input
            label="Quantity"
            input={{
              id: "amount_" + props.id,
              type: "number",
            }}
            onChange={inputChangeHandler}
          />
          <Button onClick={() => addToCartHandler(item)}>Add To Cart</Button>
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <ul className={classes.list}>{listOfMed}</ul>
    </Fragment>
  );
};

export default MedList;
