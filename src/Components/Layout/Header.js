import React, {Fragment} from 'react'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import mealspic from '../../Assets/meals-pic.webp'
import Search from '../Search/Search'
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Delivery Site</h1>
            <Search/>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealspic} alt="list of meals" />
        </div>
    </Fragment>
  )
}

export default Header