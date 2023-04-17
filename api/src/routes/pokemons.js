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
pokemonRouter.get("/", getAllPokemons); //? aca deberia ir un handler getAllPokemons 
pokemonRouter.get("/:id", getDetail);
//POST
pokemonRouter.post("/", createPokemonHandler);

module.exports = pokemonRouter;
