const { User } = require('../../db');

const createUserController = async (userData) => {
  const { name, email, password } = userData;
  if (!name || !email || !password) throw new Error(`Todos los campos son requeridos.`);
  const [newUser, created] = User.findOrCreate({
    where: { email: email },
    defaults: { email, password },
  });

  if (!created) throw new Error(`Ya existe un usuario con el nombre ${email}.`);

  return newUser;
};

module.exports = { createUserController };
