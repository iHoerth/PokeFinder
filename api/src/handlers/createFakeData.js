const { fakeData } = require('../controllers/fakeData/fakeData');

const createFakeData = async (req, res) => {
  try {
    const { limit } = req.query;
    const result = await fakeData(limit);
    res.status(200).send('Data creada con exito');
  } catch (e) {
    res.status(400).json(e.message);
  }
};

module.exports = { createFakeData };
