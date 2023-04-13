const { Router } = require("express");
const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  res.status(200).json({ msg: "GETTING ALL POSTS" });
});

postsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `GETTING POST WITH ID ${id}` });
});

postsRouter.post("/", (req, res) => {
  const { newPost } = req.body;
  res.status(200).json({ msg: "POST CREATED", newPost });
});

module.exports = postsRouter;
