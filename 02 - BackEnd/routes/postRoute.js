const router = require("express").Router();

const Post = require("../models/Post.js");

router.post("/", async (req, res) => {
  const { author, status, body, answer } = req.body;

  const post = {
    author,
    status,
    body,
    answer,
  };

  try {
    await Post.create(post);
    res.status(201).json({ message: "Dado inserido no sistema" });
  } catch (error) {
    res.status(500).json({ ERROR: error });
  }
});

module.exports = router;
