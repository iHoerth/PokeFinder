const getPosts = (req, res) => {
  res.status(200).json({ msg: "GETTING ALL POSTS" });
}

const getPostById = (req, res) => {
  const { id } = req.params;
  // const result = controllerQueTraePosts(id)
  res.status(200).json({ msg: `GETTING POST WITH ID ${id}` });
}

const createPost = (req, res) => {
  const { newPost } = req.body;
  res.status(200).json({ msg: "POST CREATED", newPost });
}

module.exports = {
  getPosts,
  getPostById,
  createPost,
}