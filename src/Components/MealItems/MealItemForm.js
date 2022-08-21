import React, {useRef, useState} from 'react'
import Input from '../Ul/Input'
import classes from './MealItemForm.module.css'
function MealItemForm(props) {
  
  const[isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();
  const onSubmitHandler=(event)=>{
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountInNumber = +enteredAmount;
    if(enteredAmount.trim().length===0 || enteredAmountInNumber < 1 || enteredAmountInNumber > 5){
      setIsAmountValid(false);
      return;
    }
    props.onAddToCart(enteredAmountInNumber);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input ref={amountInputRef} label="Amount" input={{
            id: "amount",
            type: "number",
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button>+ Add</button>
        {!isAmountValid && <p>please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm