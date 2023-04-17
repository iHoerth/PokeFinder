const { Pokemon } = require("../db");
const axios = require("axios");
const parsePokemon = require("../helpers/parsePokemon");

const BASE_URL = "https://pokeapi.co/api/v2";
const START = 0;
const LIMIT = 60;

const fetchPokemon = async (nameOrId, source) => {
  if (!nameOrId) {
    throw new Error("Invalid name or ID.");
  }

  const pokemonData = (await axios.get(`${BASE_URL}/pokemon/${nameOrId}`)).data;

  const parsedPokemon = parsePokemon(pokemonData);

  return parsedPokemon;
};

const fetchPokemonById = async (id, source) => {
  let pokemon =
    source === "api"
      ? await fetchPokemon(id, "api")
      : await Pokemon.findByPk(id);
  return pokemon;
};

const fetchAllPokemon = async () => {
  const url = `${BASE_URL}/pokemon?offset=${START}&limit=${LIMIT}`;
  // array of objects with url
  const fetchPokeUrls = (await axios(url)).data.results;
  const pokemonFromApi = await Promise.all(
    fetchPokeUrls.map((poke) => fetchPokemon(poke.name))
  );
  const pokemonFromDb = await Pokemon.findAll();

  const pokemons = [...pokemonFromDb, ...pokemonFromApi];

  return pokemons;
};

const createPokemon = async (object) => {
  return await Pokemon.create(object);
};

module.exports = {
  createPokemon,
  fetchPokemonById,
  fetchPokemon,
  fetchAllPokemon,
};
