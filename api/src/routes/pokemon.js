const { Router } = require("express");
const {
  getPokemon,
  getPokemonById,
  createPokemonHandler,
} = require("../handlers/pokemon");

const pokemonRouter = Router();

//GET
pokemonRouter.get("/:id", getPokemon);
pokemonRouter.get("/:name", getPokemon);
//POST
pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;
