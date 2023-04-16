const getTypes = (req, res) => {
  const { type } = req.params;
  try {
    res.status(200).json({ msg: `GETTING ${type} POKEMONS` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTypes,
};
