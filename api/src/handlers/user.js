// requerir controllers;
const { createUserController } = require('../controllers/user/createUserController');
const { getAllUsers } = require('../controllers/user/getAllUsers');
const { getUserByEmail } = require('../controllers/user/getUserByEmail');
const { loginUser } = require('../controllers/user/loginUser');

const loginUserHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log(email, password);
    const result = await loginUser(email, password);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const createUserHandler = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log(' try ');
    const result = await createUserController(name, email, password);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const result = await getAllUsers();
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = { loginUserHandler, createUserHandler, fetchAllUsers };
