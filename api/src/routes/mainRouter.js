const { Router } = require("express");
const router = Router();

// GET ok
router.get("/users", (req, res) => {
  res.status(200).json({ msg: "Users OK" });
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `Detalle del usuario cuyo id es : ${id}` });
});

// POST ok
router.post("/users", (req, res) => {
  const { stats } = req.body;
  res.status(200).json({ stats: stats });
});

module.exports = router;
