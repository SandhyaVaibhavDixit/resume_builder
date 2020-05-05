import { CheckValidity } from "./CheckValidity";

export default function validate(values, dataStructure) {
  let errors = {};

  dataStructure.map(eachFeild =>{
    console.log(eachFeild);
    const name = eachFeild.name;
    const label = eachFeild.label;
    const value = values[eachFeild.name];
    const validation = eachFeild.validation;
    console.log("value: " + values);

    if (!value) {
      errors[name] = `${label} is required`;
    } 
    else{
      const result = CheckValidity(value, validation);
      console.log("result: " + result);
      if(result === false){
          errors[name] = `${label} is invalid`;
      }
    }
    return errors;
  });

  return errors;
}
