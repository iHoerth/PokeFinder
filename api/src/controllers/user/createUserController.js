const { User } = require('../../db');

const createUserController = async (name, email, password) => {
  console.log(' * CREATE USE CONTROLLER * ')
  if (!name || !email || !password) throw new Error(`Todos los campos son requeridos.`);

  const [newUser, created] = await User.findOrCreate({
    where: { email: email },
    defaults: { name, email, password },
  });
  console.log(created);
  console.log(newUser);
  if (!created) throw new Error(`Ya existe un usuario con el correo ${email}.`);
  
  return newUser;
};

module.exports = { createUserController };
