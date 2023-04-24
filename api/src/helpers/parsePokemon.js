const parsePokemon = (pokemonData, source) => {
  return {
    id: pokemonData.id,
    name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1).toLowerCase(),
    img: pokemonData.sprites.other["official-artwork"]["front_default"],
    stats: pokemonData.stats.map((stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat,
      };
    }),
    types: pokemonData.types.map((type) => type.type.name),
    weight: pokemonData.weight / 10,
    height: pokemonData.height / 10,
    source,
  };
};

const parsePokemonDb = (pokemonFromDb) => {
  return pokemonFromDb.map((pokeDb) => {
    const { hp, atk, def, spatk, spdef, speed } = pokeDb.dataValues;
    const result = {
      ...pokeDb.dataValues,
      types: pokeDb.Types.map((type) => type.name),
      stats: [
        {
          name: "hp",
          value: hp,
        },
        {
          name: "attack",
          value: atk,
        },
        {
          name: "defense",
          value: def,
        },
        {
          name: "special-attack",
          value: spatk,
        },
        {
          name: "special-defense",
          value: spdef,
        },
        {
          name: "speed",
          value: speed,
        },
      ],
    };

    delete result.hp;
    delete result.atk;
    delete result.def;
    delete result.spatk;
    delete result.spdef;
    delete result.speed;
    delete result.Types;

    return result;
  });
};

module.exports = { parsePokemon, parsePokemonDb };
