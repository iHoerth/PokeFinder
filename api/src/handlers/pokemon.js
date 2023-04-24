const { fetchPokemon, fetchAllPokemon } = require('../controllers/pokemon/fetchPokemon');
const { fetchPokemonById } = require("../controllers/pokemon/fetchPokemonById");
const { createPokemon } = require("../controllers/pokemon/createPokemon");

const getPokemon = async (req, res) => {
  const { name } = req.query;
  try {
    const result = name ? await fetchPokemon(name) : await fetchAllPokemon();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const result = await fetchPokemonById(id, source);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPokemonHandler = async (req, res) => {
  const body = req.body;
  try {
    const result = await createPokemon(body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemon,
  getDetail,
  createPokemonHandler,
};
