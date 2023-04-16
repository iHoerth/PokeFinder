const { createPokemon } = require("../controllers/pokemon");

//! CONTROLLERS ///////////
const findPokemon = (nameOrId) => {
  const allPokemon = [{name: 'Tangela'},{name: 'Growlithe',id:'1234'}];
  if(!nameOrId) {
    throw new Error('Invalid name or ID.')
  } 
  return allPokemon.find(poke => poke.id === nameOrId || poke.name === nameOrId)
}

//! /////////////////////

const getPokemon = (req, res) => {
  const { id, name } = req.params;
  const result = findPokemon(id,name)
  try {
    res.status(200).json({result});
  } catch (error) {
    res.status(400).json({ err: err.message });
  }
};

const getPokemonById = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({ msg: `GETTING POKEMON WITH ID ${id}` });
  } catch (error) {
    res.status(400).json({ err: err.message });
  }
};

const createPokemonHandler = async (req, res) => {
  const body = req.body;
  try {
    const result = await createPokemon(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err: err.message, body });
  }
};

module.exports = {
  getPokemon,
  getPokemonById,
  createPokemonHandler,
};
