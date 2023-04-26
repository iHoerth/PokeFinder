const { Pokemon, Type } = require("../../db");
const createPokemon = async (
  name,
  img,
  hp,
  atk,
  def,
  spatk,
  spdef,
  speed,
  weight,
  height,
  type,
  subType
) => {
  name = name.toLowerCase();
  const [newPoke, created] = await Pokemon.findOrCreate({
    where: { name: name },
    defaults: {
      img,
      hp,
      atk,
      def,
      spatk,
      spdef,
      speed,
      weight,
      height
    }
  });
  
  if (!created) {
    throw new Error(`El pokemon con el nombre ${name} ya existe en la base de datos.`);
  }
  
  let types = [type,subType]
  let typesDb = await Type.findAll({ where: { name: types } });
  console.log(typesDb, 'TYPES DB')
  await newPoke.addTypes(typesDb);

  const response = await Pokemon.findByPk(newPoke.id, {
    include: [{ model: Type }],
  });

  return response;
};

module.exports = { createPokemon };
