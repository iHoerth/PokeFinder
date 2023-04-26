import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  // tendria que haber alguna action para ordenar pokemones, asi actualiza el store y se renderiza Home. 

  const sortPokemonHandler = (stat) => {
    console.log(stat);
    const result = pokemon.sort((pokeA, pokeB) => {
      console.log(pokeA.stats[stat]);
      return pokeB.stats[stat] - pokeA.stats[stat];
    });
    console.log(pokemon);
    // aca hariamos el dispatch(sortPokemon(stat)) de hecho la action seria la funcion que esta escrita aca arriba xd
    return result;
  };

  



  useEffect(() => {
    console.log(pokemon);
  }, []);

  return (
    <div>
      <select onChange={(e) => sortPokemonHandler(e.target.value)}>
        <option value="hp">HP</option>
        <option value="attack">Atk</option>
        <option value="defense">Def</option>
        <option value="special_attack">Spatk</option>
        <option value="special_defense">Spdef</option>
        <option value="speed">Speed</option>
      </select>
    </div>
  );
};

export default Filter;
