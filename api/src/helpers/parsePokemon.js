const parsePokemon = (pokemonData, source) => {
  return {
    id: pokemonData.id,
    name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1).toLowerCase(),
    img: pokemonData.sprites.other["official-artwork"]["front_default"],
    stats: pokemonData.stats.reduce((obj, stat) => {
      obj[stat.stat.name.replace("-", "_")] = stat.base_stat;
      return obj;
    }, {}),
    types: pokemonData.types.map((type) => type.type.name),
    egg_group: '', // esto sale de https://pokeapi.co/api/v2/pokemon-species/:id
    evo_chain: '', // esto sale de https://pokeapi.co/api/v2/pokemon-species/:id ----> esto te da un https://pokeapi.co/api/v2/evolution-chain/:evoChainId/ 
    // tambien se podria hacer un modelo ed evo chain y relacionarlo con los pokemones
    //
    is_legendary: 'true || false', // esto sale de https://pokeapi.co/api/v2/pokemon-species/:id
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
          'hp':hp,
        },
        {
          'attack':atk,
        },
        {
          'defense': def,
        },
        {
          'special_attack': spatk,
        },
        {
          'special_defense': spdef,
        },
        {
          'speed': speed,
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
