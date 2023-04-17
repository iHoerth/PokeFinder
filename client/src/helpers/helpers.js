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
