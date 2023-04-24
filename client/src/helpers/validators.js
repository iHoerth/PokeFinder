export const validateField = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  const formFields = Object.keys(inputs);

  for (const field of formFields) {
    if (!inputs[field]) {
      errors[field] = `${field} requerido.`;
    }
  }
  console.log(errors);
  return errors;
};


