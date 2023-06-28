const { Router } = require("express");
const pokemonsRouter = require("./pokemons");
const usersRouter = require("./users");
const typesRouter = require("./types");
const fakeDataRouter = require("./fakeData");

const router = Router();

router.use('/fake', fakeDataRouter)
router.use("/users", usersRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);

module.exports = router;
