const { Router } = require("express");
const pokemons = require("./pokemons");
const users = require("./users");
const types = require("./types");

const router = Router();

router.use("/users", users);
router.use("/pokemons", pokemons);
router.use("/types", types);

module.exports = router;
