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
import { compareStats, applySort } from '../helpers/helpers';

const initialState = {
  pokemons: [],
  sort: { sortBy: '', order: '' },
  filteredPokemons: [],
  selectedFilters: initialFilters,
  types: [],
  detail: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: [...action.payload],
        sortedPokemons: [...action.payload],
        filteredPokemons: [...action.payload],
      };

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
                console.log('CASE NAME')
                console.log(poke.name.toLowerCase().includes(filterValue))
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
        }
        return passesFilter;
      });

      const { sortBy, order } = state.sort;
      const sortedAndFiltered = applySort(filteredPokemons, sortBy, order);

      return {
        ...state,
        selectedFilters: newFilters,
        filteredPokemons: sortedAndFiltered,
      };

    case CLEAR_FILTER:
      const defaultOrderPokemons = applySort(state.pokemons);
      return {
        ...state,
        selectedFilters: { ...initialFilters },
        filteredPokemons: [...defaultOrderPokemons],
      };

    case SORT_POKEMON:
      const sortedPokemon = applySort(state.pokemons, action.payload.sortBy, action.payload.order);
      const sortedFiltered = applySort(
        state.filteredPokemons,
        action.payload.sortBy,
        action.payload.order
      );
      return {
        ...state,
        sort: { ...action.payload },
        pokemons: [...sortedPokemon],
        filteredPokemons: [...sortedFiltered],
      };

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
