const { Pokemon } = require("../../db");
const { fetchPokemon } = require("./fetchPokemon");

const fetchPokemonById = async (id, source) => {
  let pokemon;
  if (source === "api") {
    pokemon = await fetchPokemon(id, "api");
  } else {
    try {
      pokemon = await Pokemon.findByPk(id);
    } catch (error) {
      pokemon = await fetchPokemon(id, "api");
    }
  }
  return pokemon;
};

module.exports = { fetchPokemonById };
