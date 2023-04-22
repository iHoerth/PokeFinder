const { Type } = require("../../db");
const axios = require("axios");
const parseTypes = require('../../helpers/parseTypes')

const BASE_URL = "https://pokeapi.co/api/v2";

const createType = async (name) => {
  return await Type.create({ name });
};

const fetchTypes = async () => {
  const url = `${BASE_URL}/type`;
  const types = (await axios(url)).data.results;
  const parsedTypes = await parseTypes(types);
  return parsedTypes;
};

module.exports = { createType, fetchTypes };
