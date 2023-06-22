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

const initialState = {
  pokemons: [],
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
      return {
        ...state,
        filteredPokemons: [...action.payload],
        selectedFilters: [...state.selectedFilters, ...action.payload],
      };

    case CLEAR_FILTER:
      return {
        ...state,
        selectedFilters: { ...initialFilters },
        filteredPokemons: [...state.pokemons],
      };

    case SORT_POKEMON:
      return { ...state, filteredPokemons: [...action.payload] };

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
