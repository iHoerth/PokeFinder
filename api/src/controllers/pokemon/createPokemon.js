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
  types //array!!!!!!
) => {
  // const { name, img, hp, atk, def, spatk, spdef, speed, weight, height, type, subtype } = pokemon;

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

  let typesDb = await Type.findAll({ where: { name: types } });
  await newPoke.addTypes(typesDb);

  const response = await Pokemon.findByPk(newPoke.id, {
    include: [{ model: Type }],
  });

  return response;
};

module.exports = { createPokemon };
