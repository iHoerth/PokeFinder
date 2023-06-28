const { Pokemon } = require('../../db');
const { Type } = require('../../db');
const axios = require('axios');
const { parsePokemon, parsePokemonDb } = require('../../helpers/parsePokemon');

const BASE_URL = 'https://pokeapi.co/api/v2';
const START = 0;
const LIMIT = 400;

const fetchPokemon = async (nameOrId) => {
  if (!nameOrId) {
    throw new Error('Invalid name or ID.');
  }
  return axios
    .get(`${BASE_URL}/pokemon/${nameOrId.toLowerCase()}`)
    .then((pokemonData) => {
      const parsedPokemon = parsePokemon(pokemonData.data, 'api');
      return parsedPokemon;
    })
    .catch(() => {
      Pokemon.findAll({ where: { name: nameOrId }, include: Type })
        .then((res) => res)
        .catch(() => `NO EXISTE ESE POKEMON`);
      // No es necesario el catch, es para customizarlo un poco mas al error y guiarme mejor mientras desarrollaba.
      // Sin el catch, el response es un error gigante con un message que dice "Request failed with status code 404"
      // throw new Error(`404. Pokemon '${nameOrId}' not found.`);
    });
};

const fetchAllPokemon = async () => {
  const url = `${BASE_URL}/pokemon?offset=${START}&limit=${LIMIT}`;
  const fetchPokeUrls = (await axios(url)).data.results;
  const pokemonFromApi = await Promise.all(fetchPokeUrls.map((poke) => fetchPokemon(poke.name)));
  const pokemonFromDb = await Pokemon.findAll({
    include: [{ model: Type }],
  });

  const parsedPokemonDb = parsePokemonDb(pokemonFromDb);

  const pokemons = [...parsedPokemonDb, ...pokemonFromApi];
  return pokemons;
};

module.exports = { fetchPokemon, fetchAllPokemon };
