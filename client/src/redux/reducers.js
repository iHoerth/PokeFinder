import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES,
  CLEAR_POKEMON,
  GET_DETAIL,
  CLEAR_DETAIL,
  CREATE_POKEMON,
  SET_FILTER,
  IS_FILTERING,
  CLEAR_FILTER,
  SORT_POKEMON,
} from './actionTypes';

import { initialFilters } from './initialFilters';
import { compareStats } from '../helpers/helpers';

const initialState = {
  pokemons: [],
  sortedPokemons: [],
  filteredPokemons: [],
  selectedFilters: initialFilters,
  types: [],
  detail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: [...action.payload], filteredPokemons: [...action.payload] };

    case GET_POKEMON:
      return { ...state, pokemons: [...action.payload] };

    case GET_TYPES:
      return { ...state, types: [...action.payload] };

    case SET_FILTER:
      const { selectedFilters, pokemons } = state;
      const newFilters = { ...selectedFilters, ...action.payload };
      console.log(newFilters);
      const filteredPokemons = pokemons.filter((poke) => {
        let passesFilter = true;
        for (const filterKey in newFilters) {
          const [filterValue, active] = newFilters[filterKey];

          if (active) {
            switch (filterKey) {
              case 'name':
                if (!poke.name.toLowerCase().includes(filterValue.toLowerCase())) {
                  passesFilter = false;
                }
                break;
              case 'type':
                if (!poke.types.includes(filterValue)) {
                  passesFilter = false;
                }
                break;
              case 'subtype':
                if (!poke.types.includes(filterValue)) {
                  passesFilter = false;
                }
                break;
              case 'stats':
                if (!compareStats(poke, filterValue)) {
                  passesFilter = false;
                }
                break;
            }
          }
          // if(!passesFilter) return false; //esto para cortar de ante mano en cuanto encuentre 1 false
        }
        return passesFilter;
      });
      return {
        ...state,
        selectedFilters: newFilters,
        filteredPokemons: filteredPokemons,
        // aca tengo que hacer la funcionalidad, iterar selected filters y en funcion de los true filtrar state.pokemons
      };

    case CLEAR_FILTER:
      return {
        ...state,
        selectedFilters: { ...initialFilters },
        filteredPokemons: [...state.pokemons],
      };

    case SORT_POKEMON:
      return { ...state, pokemons: [...action.payload] };

    case CLEAR_POKEMON:
      return { ...state, pokemons: [] };

    case GET_DETAIL:
      return { ...state, detail: action.payload };

    case CLEAR_DETAIL:
      return { ...state, detail: {} };

    case CREATE_POKEMON:
      return { ...state };

    default:
      return { ...state };
  }
};
