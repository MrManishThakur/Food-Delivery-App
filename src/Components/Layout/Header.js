import React, {Fragment} from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import meals from '../../Assets/meals.jpg'
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Delivery Site</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="list of meals" />
        </div>
    </Fragment>
  )
}

export default Header