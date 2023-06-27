const { User } = require('../../db');

const getAllUsers = async () => {
  const response = await User.findAll();
  return response;
};

module.exports = { getAllUsers };
