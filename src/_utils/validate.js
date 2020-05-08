import { CheckValidity } from "./CheckValidity";

export default function validate(values, formInputs) {
  let errors = {};

  formInputs.map(formInput => {

    const { name, label, validation } = formInput;
    const value = values[formInput.name];

    if (!value) {
      errors[name] = `${label} is required`;
    } 
    else {
      const result = CheckValidity(value, validation);

      if(result === false){
          errors[name] = `${label} is invalid`;
      }
    }
    
    return errors;
  });

  return errors;
}
