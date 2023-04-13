const { Router } = require("express");
const postsRouter = Router();
const { getPosts, getPostById, createPost } = require("../handlers/postsHandlers");

postsRouter.get("/", getPosts);

postsRouter.get("/:id", getPostById);

postsRouter.post("/", createPost);

module.exports = postsRouter;
