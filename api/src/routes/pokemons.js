const { Router } = require("express");
const {
  getAllPokemons,
  getPokemon,
  getDetail,
  createPokemonHandler,
} = require("../handlers/pokemon");

const pokemonRouter = Router();

//GET
pokemonRouter.get("/", getPokemon); 
pokemonRouter.get("/:id", getDetail);
pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;
