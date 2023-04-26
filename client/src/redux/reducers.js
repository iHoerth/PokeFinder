import {
  GET_POKEMONS,
  GET_POKEMON,
  GET_TYPES,
  CLEAR_POKEMON,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  GET_DETAIL,
  LOGIN,
  LOGOUT,
  CLEAR_DETAIL,
  CREATE_POKEMON,
} from "./actionTypes";

const initialState = {
  allPokemon: [],
  pokemon: [],
  types: [],
  detail: {},
  myFavorites: [],
  access: false,
  loginFailure: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, allPokemon: [...action.payload], pokemon: [...action.payload] };

    case GET_POKEMON:
      return { ...state, pokemon: [...action.payload] };

    case GET_TYPES:
      return { ...state, types: [...action.payload] };

    case CLEAR_POKEMON:
      return { ...state, pokemon: [] };

    case GET_DETAIL:
      return { ...state, detail: action.payload };

    case CLEAR_DETAIL:
      return { ...state, detail: {} };

    case CREATE_POKEMON:
      return {...state}
      
    case ADD_FAVORITES:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAVORITES:
      const result = state.myFavorites.filter((favorite) => favorite.id !== action.payload.id);
      return { ...state, myFavorites: result };

    default:
      return { ...state };
  }
};
