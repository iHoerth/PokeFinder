const {
  createPokemon,
  fetchPokemon,
  fetchPokemonById,
  fetchAllPokemon,
} = require("../controllers/pokemon");

const getPokemon = async (req, res, next) => {
  const { name } = req.query;
  if (name) {
    try {
      const result = await fetchPokemon(name);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  } else {
    next();
  }
};

const getAllPokemons = async (req, res) => {
  try {
    const result = await fetchAllPokemon();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const result = await fetchPokemonById(id, source);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const createPokemonHandler = async (req, res) => {
  const body = req.body;
  try {
    const result = await createPokemon(body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
  getAllPokemons,
  getPokemon,
  getDetail,
  createPokemonHandler,
};
