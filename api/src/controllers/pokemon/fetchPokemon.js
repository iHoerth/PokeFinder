const { Pokemon } = require("../../db");
const { Type } = require("../../db");
const axios = require("axios");
const { parsePokemon, parsePokemonDb } = require("../../helpers/parsePokemon");

const BASE_URL = "https://pokeapi.co/api/v2";
const START = 0;
const LIMIT = 151;

const fetchPokemon = async (nameOrId) => {
  if (!nameOrId) {
    throw new Error("Invalid name or ID.");
  }
  const pokemonData = await axios.get(`${BASE_URL}/pokemon/${nameOrId.toLowerCase()}`);
  const parsedPokemon = parsePokemon(pokemonData.data, "api");
  return parsedPokemon;
};

const fetchAllPokemon = async () => {
  const url = `${BASE_URL}/pokemon?offset=${START}&limit=${LIMIT}`;
  const fetchPokeUrls = (await axios(url)).data.results;
  const pokemonFromApi = await Promise.all(fetchPokeUrls.map((poke) => fetchPokemon(poke.name)));
  const pokemonFromDb = await Pokemon.findAll({
    include: [{ model: Type }],
  });

  const parsedPokemonDb = parsePokemonDb(pokemonFromDb)

  const pokemons = [...parsedPokemonDb, ...pokemonFromApi];
  console.log(pokemons[0]);
  return pokemons;
};

module.exports = { fetchPokemon, fetchAllPokemon };
