const { Router } = require("express");
const pokemonRouter = require("./pokemon");
const typeRouter = require("./type");

const router = Router();

router.use("/pokemon", pokemonRouter);
router.use("/type", typeRouter);

module.exports = router;
