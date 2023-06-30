const { User } = require('../../db');
const bcrypt = require('bcrypt');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email: email, password: password } });
  if (!user) throw new Error(`No existe usuario con ese correo.`);

  const hashedPassword = bcrypt.hash(password, 10);

  if (user.password !== hashedPassword) {
    throw new Error(`Contraseña incorrecta.`);
  }

  return user;
};

module.exports = { loginUser };
