import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toTitleCase } from "../../helpers/helpers";
import { sortPokemons, filterPokemons, clearFilter } from "../../redux/actions";
import style from './Filter.module.css'
const Filter = ({ pokemons }) => {
  // const pokemon = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  const types = useSelector((state) => state.types);
  // tendria que haber alguna action para ordenar pokemones, asi actualiza el store y se renderiza Home.

  const sortPokemonHandler = (stat) => {
    const sortedPokemon = filteredPokemons.sort(
      (pokeA, pokeB) => pokeB.stats[stat] - pokeA.stats[stat]
    );
    // aca hariamos el dispatch(sortPokemons(stat)) de hecho la action seria la funcion que esta escrita aca arriba xd
    dispatch(sortPokemons(sortedPokemon));
  };

  const filterHandler = (value) => {
    const newFilter = filteredPokemons.filter((poke) => {
      return poke.types.includes(value);
    });
    dispatch(filterPokemons(newFilter));
  };

  const filterSourceHandler = (value) => {
    if(value === 'All') return dispatch(clearFilter());
    const newFilter = filteredPokemons.filter((poke) => {
      return poke.source === value;
    });
    dispatch(filterPokemons(newFilter));
  };

  const clearFilterHandler = () => {
    dispatch(clearFilter());
  };

  return (
    <div className={style.container}>
      <select onChange={(e) => sortPokemonHandler(e.target.value)}>
        <option value="hp">HP</option>
        <option value="attack">Atk</option>
        <option value="defense">Def</option>
        <option value="special_attack">Spatk</option>
        <option value="special_defense">Spdef</option>
        <option value="speed">Speed</option>
      </select>

      <select onChange={(e) => filterHandler(e.target.value)}>
        {types &&
          types.map((type) => (
            <option key={type} value={type}>
              {toTitleCase(type)}
            </option>
          ))}
      </select>

      <select onChange={(e) => filterSourceHandler(e.target.value)}>
        <option value="All">All</option>
        <option value="api">Api</option>
        <option value="bd">BD</option>
      </select>

      <button onClick={() => clearFilterHandler()}> CLEAR FILTER </button>
    </div>
  );
};

export default Filter;
