import axios from "axios";

import {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  GET_POKEMON,
  CLEAR_POKEMON,
  GET_DETAIL,
  LOGIN,
  LOGOUT,
} from "./actionTypes";

export const getPokemon = () => {
  return async function (dispatch) {
    const response = await axios("http://localhost:3001/pokemons");
    return dispatch({
      type: GET_POKEMON,
      payload: response.data,
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
