import axios from "axios";

import {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  GET_POKEMON,
  GET_POKEMONS,
  GET_TYPES,
  CLEAR_POKEMON,
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
  // const name = payload?.name;
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/pokemons`);
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
};

export const getPokemon = (name) => {
  // const name = payload?.name;
  const query = name ? `?name=${name}` : "";
  return async function (dispatch) {
    // const response = await axios(`http://localhost:3001/pokemons${query}`);
    const pokemon = await axios(`http://localhost:3001/pokemons`);
    const filteredPokemon = pokemon.data.filter(
      (poke) =>
        poke.name.toLowerCase().includes(name.toLowerCase()) ||
        poke.types.includes(name.toLowerCase()) ||
        poke.id.toString().includes(name.toLowerCase())
    );
    return dispatch({
      type: GET_POKEMON,
      payload: filteredPokemon,
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

export const getDetail = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: GET_DETAIL,
      payload: payload,
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
