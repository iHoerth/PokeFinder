export const toTitleCase = (str) =>
  str[0].toUpperCase() + str.slice(1).toLowerCase();

export const searchPokemon = (pokemonArray, e) => {
  const filteredPoke = pokemonArray.filter(
    (poke) =>
      poke.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      poke.id == e.target.value
  );
  return filteredPoke;
};


export const validate = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const errors = {};

  if (!inputs.username) {
    errors.username = "Usuario requerido";
  }


  if (!inputs.password) {
    errors.password = "Contraseña requerida";
  }
  console.log(errors);
  return errors;
};
