import React, { Fragment, useContext, useState } from "react";
import Button from "../UI/Button";
import classes from "./MedForm.module.css";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../store/Cart-Context";

const MedForm = () => {
  const [name, setName] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const [desc, setDesc] = useState("");
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
  };
  const [price, setPrice] = useState("");
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const cntx = useContext(CartContext);
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const medObj = {
      medName: name,
      medDesc: desc,
      price: price,
      id: uuidv4(),
    };
    cntx.addToList(medObj);
    console.log(medObj);
    setName("");
    setDesc("");
    setPrice("");
  };
  return (
    <Fragment>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="medName">Medicine Name</label>
          <input
            type="text"
            id="medName"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            onChange={descChangeHandler}
            value={desc}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <Button>Add Medicine</Button>
      </form>
    </Fragment>
  );
};

export default MedForm;
