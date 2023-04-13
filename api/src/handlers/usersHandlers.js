const getUsers = (req, res) => {
  res.status(200).json({ msg: `GETTING ALL USERS` });
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `GETTING USER WITH ID ${id}` });
};

const createUser = (req, res) => {
  const { newUser } = req.body;
  res.status(200).json({ msg: `USER CREATED SUCCESSFULLY`, newUser });
};


module.exports = {
  getUsers,
  getUserById,
  createUser,
}