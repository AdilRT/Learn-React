import { useState } from "react";

const useInput = (validateLogic) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateLogic(enteredValue);
  const inputHasError = !enteredValueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    enteredValue,
    isTouched,
    enteredValueIsValid,
    inputHasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }

}

export default useInput;
