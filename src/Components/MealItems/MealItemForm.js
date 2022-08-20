import React from 'react'
import Input from '../Ul/Input'
import classes from './MealItemForm.module.css'
function MealItemForm() {
  return (
    <form className={classes.form}>
        <Input label="Amount" input={{
            id: "amount",
            type: "number",
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm