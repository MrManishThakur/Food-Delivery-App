import { useState } from "react";
import { useRef } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotSixChars = (value) => value.trim().length !== 6;
const isNotTenDigit = (value) => value.trim().length !==10;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    number: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const numberIsValid = !isNotTenDigit(enteredNumber);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalIsValid = !isNotSixChars(enteredPostal);
    const cityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: nameIsValid,
      number: numberIsValid,
      street: streetIsValid,
      postalCode: postalIsValid,
      city: cityIsValid,
    });

    const isFormValid =
      nameIsValid && numberIsValid && streetIsValid && postalIsValid && cityIsValid;

    if (!isFormValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      number: enteredNumber,
      street: enteredStreet,
      postalCode: enteredPostal,
      city: enteredCity,
    });
  };

  const nameClasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;
  const numberClasses = `${classes.control} ${
    formInputValidity.number ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;
  const postalCodeClasses = `${classes.control} ${
    formInputValidity.postalCode ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter valid name</p>}
      </div>

      <div className={numberClasses}>
        <label htmlFor="number">Phone Number</label>
        <input type="number" id="number" ref={numberInputRef} />
        {!formInputValidity.number && <p>Please enter valid number</p>}
      </div>

      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter valid street</p>}
      </div>

      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter valid city</p>}
      </div>

      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="number" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && (
          <p>Please enter six digit postal code</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
