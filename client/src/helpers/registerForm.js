export const validateRegister = (inputs, form) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  const formFields = Object.keys(form);

  for (const field of formFields) {
    if (!inputs[field]) {
      errors[field] = `${field} requerido.`;
    }
  }

  
  // if (!inputs.username) {
  //   errors.username = "Usuario requerido";
  // }

  // if (!inputs.password) {
  //   errors.password = "Contraseña requerida";
  // }
  console.log(errors);
  return errors;
};
