const { User } = require('../../db');
const bcrypt = require('bcrypt')

const createUserController = async (name, email, password) => {
  console.log(' * CREATE USE CONTROLLER * ')
  if (!name || !email || !password) throw new Error(`Todos los campos son requeridos.`);
  console.log(password)
  const hashedPassword = await bcrypt.hash(password, 10)

  const [newUser, created] = await User.findOrCreate({
    where: { email: email },
    defaults: { name, email, password: hashedPassword },
  });
  if (!created) throw new Error(`Ya existe un usuario con el correo ${email}.`);
  
  return newUser;
};

module.exports = { createUserController };
