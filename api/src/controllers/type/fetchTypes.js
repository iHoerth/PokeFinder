const axios = require("axios");
const parseTypes = require('../../helpers/parseTypes')

const BASE_URL = "https://pokeapi.co/api/v2";

const fetchTypes = async () => {
  const url = `${BASE_URL}/type`;
  const types = (await axios(url)).data.results;
  const parsedTypes = await parseTypes(types);
  const result = await createType(parsedTypes);
  return result;
};

module.exports = { fetchTypes };
