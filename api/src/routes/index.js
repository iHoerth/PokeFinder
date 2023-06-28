const { Router } = require("express");
const pokemonsRouter = require("./pokemons");
const usersRouter = require("./users");
const typesRouter = require("./types");

const router = Router();

router.use("/users", usersRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
