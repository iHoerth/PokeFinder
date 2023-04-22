const { createType, fetchTypes } = require('../controllers/type/type') 

const getTypes = async (req, res) => {
  // const { type } = req.params;
  try {
    const result = await fetchTypes()
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTypes,
};
