const { Router } = require("express");
const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).json({ msg: `GETTING ALL USERS` });
});

usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `GETTING USER WITH ID ${id}` });
});

usersRouter.post("/createUser", (req, res) => {
  const { newUser } = req.body;
  res.status(200).json({msg: `USER CREATED SUCCESSFULLY`, newUser})
});

module.exports = usersRouter;
