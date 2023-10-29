import React from 'react';

export const useInput = (initialValue, validators) => {

   const [value, setValue] = React.useState(initialValue);
   const [isDirty, setDirty] = React.useState(false);
   const valid = useValidation(value, validators);

   const onChange = (event) => {
      setValue(event.target.value);
   }

   const onBlur = () => {
      setDirty(true);
   }

   return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
   }
}

export const useValidation = (value, validators) => {
   const [isEmpty, setEmpty] = React.useState(true);
   const [minLengthError, setMinLengthError] = React.useState(false);
   const [emailError, setEmailError] = React.useState(false);
   const [userNameError, setUserNameError] = React.useState(false);
   const [inputValid, setInputValid] = React.useState(false);

   React.useEffect(() => {
      for (const validation in validators) {
         switch (validation) {
            case 'minLength':
               value?.length < validators[validation] ? setMinLengthError(true) : setMinLengthError(false);
               break;
            case 'isEmpty':
               value ? setEmpty(false) : setEmpty(true);
               break;
            case 'isEmail':
               // eslint-disable-next-line no-useless-escape
               const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
               emailRegex.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
               break;
            case 'isUserName':
               const userNameRegex = /[\wа-я\sё]/gi;
               userNameRegex.test(String(value).toLowerCase()) ? setUserNameError(false) : setUserNameError(true);
               break;
            default:
               break;
         }
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [value]);

   React.useEffect(() => {
      if (isEmpty || minLengthError || emailError || userNameError) {
         setInputValid(false);
      } else {
         setInputValid(true);
      }
   }, [isEmpty, minLengthError, emailError, userNameError])

   return {
      isEmpty,
      minLengthError,
      emailError,
      userNameError,
      inputValid
   }
}