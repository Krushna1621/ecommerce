import React from "react";
import classes from "./CartItems.module.css";

const CartItems = (props) => {
  const price = `$${props.product.price.toFixed(2)}`;

  const removeItemHandler = () => {
    console.log("Remove item");
  };

  return (
    <li key={props.product.id}>
      <div className={classes.container}>
        <div className={classes["cart-column"]}>
          <img src={props.product.imageUrl} alt="Cart items" />
          <span>{props.product.title}</span>
        </div>
        <span className={classes.price}>{price}</span>
        <div className={classes["cart-column"]}>
          <span className={classes.amount}>x {props.product.quantity}</span>
          <button className={classes["cart-remove"]} onClick={removeItemHandler}>
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
