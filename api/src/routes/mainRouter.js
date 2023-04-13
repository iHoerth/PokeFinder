const { Router } = require("express");
const router = Router();
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
