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

  let newPoke = await Pokemon.create({
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
  });
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
