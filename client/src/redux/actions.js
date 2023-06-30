import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';
export const GET_TYPES = 'GET_TYPES';
export const CLEAR_POKEMON = 'CLEAR_POKEMON';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const GET_DETAIL = 'GET_DETAIL';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const SORT_POKEMON = 'SORT_POKEMON';
export const SET_FILTER = 'SET_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const URL_USERS = process.env.REACT_APP_URL_USERS;
const URL_POKEMONS = process.env.REACT_APP_URL_POKEMONS;
const URL_TYPES = process.env.REACT_APP_URL_TYPES;

export const getTypes = () => {
  return async function (dispatch) {
    const response = await axios(URL_TYPES);
    return dispatch({
      type: GET_TYPES,
      payload: response.data,
    });
  };
};

export const getPokemons = () => {
  return async function (dispatch) {
    const response = await axios(URL_POKEMONS);
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
};

export const getPokemon = (name) => {
  return async function (dispatch) {
    const pokemon = await axios(`${URL_POKEMONS}?=${name}`);

    const filteredPokemons = pokemon.data.filter(
      (poke) =>
        poke.name.toLowerCase().includes(name.toLowerCase()) ||
        poke.types.includes(name.toLowerCase())
    );

    return dispatch({
      type: GET_POKEMON,
      payload: filteredPokemons,
    });
  };
};

export const getDetail = (payload) => {
  return async function (dispatch) {
    const pokemon = (await axios(`${URL_POKEMONS}/${payload}`)).data;
    return dispatch({
      type: GET_DETAIL,
      payload: pokemon,
    });
  };
};

export const clearPokemon = () => {
  return async function (dispatch) {
    return dispatch({
      type: CLEAR_POKEMON,
      payload: [],
    });
  };
};

export const clearDetail = () => {
  return async function (dispatch) {
    return dispatch({
      type: CLEAR_DETAIL,
      payload: {},
    });
  };
};

export const createPokemon = (pokemonData) => {
  return async function (dispatch) {
    const response = await axios
      .post(URL_POKEMONS, pokemonData)
      .then((res) => {
        window.alert(`CREADO CON EXITO`);
        return res;
      })
      .catch((err) => {
        window.alert(err.response.data.message);
        return err;
      });
    return dispatch({
      type: CREATE_POKEMON,
      payload: pokemonData,
      response: response,
    });
  };
};

export const filterPokemons = (newFilters) => {
  return async function (dispatch) {
    return dispatch({
      type: SET_FILTER,
      payload: newFilters,
    });
  };
};

export const sortPokemons = (sort) => {
  return async function (dispatch) {
    return dispatch({
      type: SORT_POKEMON,
      payload: sort,
    });
  };
};

export const clearFilter = () => {
  return async function (dispatch) {
    return dispatch({
      type: CLEAR_FILTER,
    });
  };
};

export const login = (loginData) => {
  return async function (dispatch) {
    try {
      // const user = await axios.post(`${URL_USERS}/`)
    } catch (e) {

    }
    return dispatch({
      type: LOGIN,
      payload: loginData,
    });
  };
};

export const logout = () => {
  return async function (dispatch) {
    return dispatch({
      type: LOGOUT,
    });
  };
};
