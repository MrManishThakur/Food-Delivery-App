import React from 'react'
import classes from './HeaderCardButton.module.css'
import CartIcon from '../Cart/CartIcon'

function HeaderCardButton(props) {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
    </button>
  )
}

export default HeaderCardButton