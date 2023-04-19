const parsePokemon = (pokemonData,source) => {
  return {
    id: pokemonData.id,
    name: pokemonData.name,
    img: pokemonData.sprites.other["official-artwork"]["front_default"],
    stats: pokemonData.stats.map((stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat,
      };
    }),
    types: pokemonData.types.map((type) => type.type.name),
    weight: pokemonData.weight,
    height: pokemonData.height,
    source,
  }
}

module.exports = parsePokemon