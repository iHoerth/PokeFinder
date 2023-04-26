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
  pokemons: [],
  filteredPokemons: [],
  types: [],
  detail: {},
  myFavorites: [],
  access: false,
  loginFailure: false,
  isFiltering: false, // si esto es false, el home renderiza todos, si es true, renderiza los filtered
  filters: {
    search: null,
    type: null,
    source: null,
  }
};

// hacer 3 actions que modifiquen search y type
// fn q hace =>  si todo filters es null entonces isFiltering es false, si alguno tiene  entonces es true
// action types que van a ser 4 tenes que ejecutar la fn de arriba

// const newFilters = { ...state.filters, ...payload }  porq sino puede explotar porq todavia valia faslse
// const state = { ...state, filters: newFilters, showFilteredPokemons, filteredPokemons: filterPokemons(filteredPokemons, newFilters)

// componente select que pasa el value al dispatch
// comp filter que tiene 2 selects

// search dispatch 

// showFilter true la refe de los poke cambia

// comp intermedio que reciba toda prop de pagi y pokemones
// sdsuhhgjdafg




// home renderiza filtered si isFiltering es false y sino rend todos




export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokemons: [...action.payload] };

    case GET_POKEMON:
      return { ...state, pokemons: [...action.payload] };

    case GET_TYPES:
      return { ...state, types: [...action.payload] };

    case CLEAR_POKEMON:
      return { ...state, pokemons: [] };

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
