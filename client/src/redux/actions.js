import axios from "axios";

import {
  GET_POKEMON,
  GET_POKEMONS,
  GET_TYPES,
  CREATE_POKEMON,
  CLEAR_POKEMON,
  CLEAR_DETAIL,
  GET_DETAIL,
  SET_FILTER,
  CLEAR_FILTER,
  IS_FILTERING,
  SORT_POKEMON,
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

export const filterPokemons = (payload) => {
  return async function (dispatch) {
    return dispatch({
      type: SET_FILTER,
      payload: payload,
    });
  };
};

export const sortPokemons = (payload) => {
  return async function (dispatch) {
    return dispatch({
      type: SORT_POKEMON,
      payload: payload,
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

export const isFiltering = (payload) => {
  return async function (dispatch) {
    return dispatch({
      type: IS_FILTERING,
      payload: payload, // <Boolean>
    });
  };
};
