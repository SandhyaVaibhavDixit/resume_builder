import { checkValidity } from "./CheckValidity";

export default function validate(values, formInputs) {
  let errors = {};

  formInputs.map(formInput => {

    const { name, label, validation } = formInput;
    const value = values[formInput.name];

    if (!value) {
      errors[name] = `${label} is required`;
    } 
    else {
      const isValid = checkValidity(value, validation);

      if (isValid === false){
          errors[name] = `${label} is invalid`;
      }
    }
    
    return errors;
  });

  return errors;
}
