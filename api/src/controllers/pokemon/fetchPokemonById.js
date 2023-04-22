const { Pokemon } = require("../../db");

const fetchPokemonById = async (id, source) => {
  let pokemon = source === "api" ? await fetchPokemon(id, "api") : await Pokemon.findByPk(id);
  return pokemon;
};

module.exports = {fetchPokemonById};