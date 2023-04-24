const { Type } = require("../../db");

const createType = async (typeArray) => {
  return typeArray.map(async (type) => {
    const result = await Type.findOrCreate({ where: { name: type } });
    return result;
  });
};
module.exports = { createType };
