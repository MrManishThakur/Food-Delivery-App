import React, { useContext } from "react";

import Modal from "../Ul/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import Checkout from "./Checkout";
import { useState } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOrdering, setIsOrdering] = useState(false);

  const [isSubmited, setIsSubmited] = useState(false);
 
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderHander = () => {
    setIsOrdering(true);
  };

  const submitOrderHandler=(userdata) =>{
    setIsSubmited(true);
  }

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHander}>
          Order
        </button>
      )}
    </div>
  );
  
  const cartModalData = <React.Fragment>
    {!isOrdering && cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!isOrdering && modalActions}
  </React.Fragment>

  const message = <p>Order sent successfully...</p>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmited && cartModalData}
      {isSubmited && message}
    </Modal>
  );
};

export default Cart;
