const {
  getPokemon,
  getDetail,
  createPokemonHandler,
} = require("../handlers/pokemon");

const { Router } = require("express");
const pokemonRouter = Router();

//GET /pokemons
pokemonRouter.get("/", getPokemon); 
pokemonRouter.get("/:id", getDetail);

pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;
