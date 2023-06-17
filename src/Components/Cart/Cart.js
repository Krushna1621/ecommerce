import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItemsList = cartCtx.items.map((item) => (
    <CartItems product={item} />
  ));

  return (
    <Model>
      <div className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <div className={classes['cart-items']}>{cartItemsList}</div>
        <div className={classes['cart-total']}>
          <span>${totalAmount}</span>
          <strong>Total</strong>
        </div>
        <Button>Purchase</Button>
      </div>
    </Model>
  );
};

export default Cart;
