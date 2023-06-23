export const toTitleCase = (str) => {
  const splitStr = str.split('_');
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();

  if (splitStr.length > 1) {
    let result = '';
    for (let word of splitStr) {
      result += ` ${toTitleCase(word)}`;
    }
    return result;
  }

  return result;
};

export const searchPokemon = (pokemonArray, e) => {
  const filteredPoke = pokemonArray.filter(
    (poke) =>
      poke.name.toLowerCase().includes(e.target.value.toLowerCase()) || poke.id == e.target.value
  );
  return filteredPoke;
};

export const validate = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const errors = {};
  const formFields = Object.keys(inputs);

  for (const field of formFields) {
    if (!inputs[field]) {
      errors[field] = `${toTitleCase(field)} requerido`;
    }
  }
  console.log(errors);
  return errors;
};

export const compareStats = (poke, filterValue) => {
  const { stats } = poke;
  const { max, min, name } = filterValue;
  return stats[name] <= max && stats[name] >= min ? true : false;
};
