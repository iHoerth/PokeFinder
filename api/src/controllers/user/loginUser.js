const { User } = require('../../db');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email: email, password: password } });
  if (!user) throw new Error(`No existe usuario con ese correo.`);

  if(user.password !== password){
    throw new Error(`Contraseña incorrecta.`)
  } 

  return user;
};

module.exports = { loginUser };
