const { Pokemon } = require("../db");

const createPokemon = async (object) => {
  return await Pokemon.create(object);
};

module.exports = { createPokemon };
