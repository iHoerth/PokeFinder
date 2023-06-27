import { toTitleCase } from "./helpers";
import axios from "axios";
// import { useSelector } from "react-redux";

// const pokemons = useSelector((state) => state.pokemons);

export const validateRegister = (inputs, form) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  const formFields = Object.keys(form);

  for (const field of formFields) {
    if (!inputs[field]) {
      errors[field] = `${field} requerido.`;
    }
  }

  console.log(errors);
  return errors;
};

export const validateLogin = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  console.log(errors);
  return errors;
};

export const validateCreate = (inputs, pokemons) => {
  const errors = {};

  const formFields = Object.keys(inputs);
  for (const field of formFields) {
    if (!inputs[field]) {
      errors[field] = `${toTitleCase(field)} requerido`;
    }

    if(field === 'name'){
      console.log(field, 'field')
      if(typeof inputs[field] === 'number'){
        errors[field] = `${toTitleCase(field)} debe contener solamente letras.`
      }
    }
  }
  // const errMsg = Object.keys(errors).map(key => errors[key]).join('\n')
  console.log(errors, "ERRORS");
  // if(Object.keys(errors).length){
  //   alert(`${Object.keys(errors).map(key => errors[key]).join('\n')}`);
  // }
  return errors;
};


// export const validateCreate = (field) => {
//   const errors = {};

//   const formFields = Object.keys(inputs);
//   for (const field of formFields) {
//     if (!inputs[field]) {
//       errors[field] = `${toTitleCase(field)} requerido`;
//     }

//     if(field === 'name'){
//       console.log(field, 'field')
//       if(typeof inputs[field] === 'number'){
//         errors[field] = `${toTitleCase(field)} debe contener solamente letras.`
//       }
//     }
//   }
//   // const errMsg = Object.keys(errors).map(key => errors[key]).join('\n')
//   console.log(errors, "ERRORS");
//   // if(Object.keys(errors).length){
//   //   alert(`${Object.keys(errors).map(key => errors[key]).join('\n')}`);
//   // }
//   return errors;
// };