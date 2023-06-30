const { User } = require('../../db');
const bcrypt = require('bcrypt');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email: email } });
  if (!user) throw new Error(`No existe usuario con ese correo.`);
  

  const passwordMatch = await bcrypt.compare(password, user.password)

  if (!passwordMatch) {
    throw new Error(`Contraseña incorrecta.`);
  }

  return user;
};

module.exports = { loginUser };
