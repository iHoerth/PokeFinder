// requerir controllers;
const { createUserController } = require('../controllers/user/createUserController');
const { getAllUsers } = require('../controllers/user/getAllUsers');
const { getUserByEmail } = require('../controllers/user/getUserByEmail');

const loginUserHandler = async (req, res) => {
  const userData = req.body;
  try {
    const result = await controller();
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

const createUserHandler = async (req, res) => {
  const userData = req.body;
  try {
    const result = await createUserController(userData);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = { loginUserHandler, createUserHandler };
