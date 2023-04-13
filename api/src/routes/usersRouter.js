const { Router } = require("express");
const usersRouter = Router();
const { getUsers, getUserById, createUser } = require("..handlers/usersHandlers");

usersRouter.get("/", getUsers);

usersRouter.get("/:id", getUserById);

usersRouter.post("/createUser", createUser);

module.exports = usersRouter;
