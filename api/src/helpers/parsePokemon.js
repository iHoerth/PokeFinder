const parsePokemon = (pokemonData, source) => {
  return {
    id: pokemonData.id,
    name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1).toLowerCase(),
    img: pokemonData.sprites.other["official-artwork"]["front_default"],
    stats: pokemonData.stats.map((stat) => {
      return {
        name : stat.stat.name,
        value : stat.base_stat,
      }
    }),
    types: pokemonData.types.map((type) => type.type.name),
    weight: pokemonData.weight / 10,
    height: pokemonData.height / 10,
    source,
  };
};

module.exports = parsePokemon;
