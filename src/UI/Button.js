import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      id={props.id}
      className={classes.button + props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
