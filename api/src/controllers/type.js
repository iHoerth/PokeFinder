const { Type } = require("../db");

const createType = async (name) => {
  return await Type.create({ name});
};


module.exports = { createType };
