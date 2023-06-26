import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toTitleCase } from '../../helpers/helpers';
import { sortPokemons, filterPokemons, clearFilter } from '../../redux/actions';
import style from './Filter.module.css';

const Filter = ({ pokemons }) => {
  const filteredPokemons = useSelector((state) => state.filteredPokemons);
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();

  const sortPokemonHandler = (stat) => {
    let sortedPokemon = [];
    if (stat === 'none') {
      sortedPokemon = filteredPokemons.sort((pokeA, pokeB) => pokeA.id - pokeB.id);
    } else {
      sortedPokemon = filteredPokemons.sort(
        (pokeA, pokeB) => pokeB.stats[stat] - pokeA.stats[stat]
      );
    }
    // aca hariamos el dispatch(sortPokemons(stat)) de hecho la action seria la funcion que esta escrita aca arriba xd
    dispatch(sortPokemons(sortedPokemon));
  };

  const filterHandler = (e) => {
    !e.target.value
      ? dispatch(filterPokemons({ [e.target.name]: ['', false] }))
      : dispatch(filterPokemons({ [e.target.name]: [e.target.value, true] }));
  };

  const clearFilterHandler = () => {
    dispatch(clearFilter());
  };

  return (
    <div className={style.container}>
      <select onChange={(e) => sortPokemonHandler(e.target.value)} name="sort">
        <option value="none">-</option>
        <option value="hp">HP</option>
        <option value="attack">Atk</option>
        <option value="defense">Def</option>
        <option value="special_attack">Spatk</option>
        <option value="special_defense">Spdef</option>
        <option value="speed">Speed</option>
      </select>

      <select onChange={(e) => filterHandler(e)} name="type">
        <option key={'all1'} value="" name="type">
          -
        </option>

        {types &&
          types.map((type) => (
            <option key={type} value={type} name="type">
              {toTitleCase(type)}
            </option>
          ))}
      </select>

      <select onChange={(e) => filterHandler(e)} name="subtype">
        <option key={'all2'} value="" name="subtype">
          -
        </option>
        {types &&
          types.map((type) => (
            <option key={type} value={type} name="subtype">
              {toTitleCase(type)}
            </option>
          ))}
      </select>
      <button onClick={() => clearFilterHandler()}> CLEAR FILTER </button>
    </div>
  );
};

export default Filter;
