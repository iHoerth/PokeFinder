import axios from "axios";

import {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  GET_POKEMON,
  GET_POKEMONS,
  GET_TYPES,
  CREATE_POKEMON,
  CLEAR_POKEMON,
  CLEAR_DETAIL,
  GET_DETAIL,
  LOGIN,
  LOGOUT,
} from "./actionTypes";

export const getTypes = () => {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPES,
      payload: response.data,
    });
  };
};

export const getPokemons = () => {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/pokemons`);
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
};

export const getPokemon = (name) => {
  return async function (dispatch) {
    const pokemon = await axios(`http://localhost:3001/pokemons?=${name}`);

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
    const pokemon = (await axios(`http://localhost:3001/pokemons/${payload}`)).data;
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

export const createPokemon = (payload) => {
  return async function (dispatch) {
    const response = await axios
      .post(`http://localhost:3001/pokemons`, payload)
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
      payload: payload,
      response: response,
    });
  };
};

export const addFavorites = (payload) => {
  return {
    type: ADD_FAVORITES,
    payload: payload,
  };
};

export const removeFavorites = (payload) => {
  return {
    type: REMOVE_FAVORITES,
    payload: payload,
  };
};

export const login = (payload) => {
  return {
    type: LOGIN,
    payload: payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
