import {
  GET_POKEMON,
  CLEAR_POKEMON,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  GET_DETAIL,
  LOGIN,
  LOGOUT,
} from "./actionTypes";


const initialState = {
  pokemon: [],
  detail: {},
  myFavorites: [],
  access: false,
  loginFailure: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemon: [...action.payload] };

    case CLEAR_POKEMON:
      return { ...state, pokemon: [] };

    case GET_DETAIL:
      return {...state, detail: action.payload}

    case ADD_FAVORITES:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case REMOVE_FAVORITES:
      const result = state.myFavorites.filter((favorite) => favorite.id !== action.payload.id);
      return { ...state, myFavorites: result };

    default:
      return { ...state };
  }
};
