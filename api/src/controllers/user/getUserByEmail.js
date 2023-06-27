const { User } = require('../../db');

const getUserByEmail = async (userEmail) => {
  const response = await User.findOne({ where: { email: userEmail } });
  if (!response) throw new Error(`Usuario inexistente.`);
  return response;
};

module.exports = { getUserByEmail };
