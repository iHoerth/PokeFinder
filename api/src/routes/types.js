const { Router } = require("express");
const { getTypes } = require("../handlers/type");

const typeRouter = Router();

typeRouter.get("/", getTypes);

module.exports = typeRouter;
