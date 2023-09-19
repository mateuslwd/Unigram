const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
  author: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    require: true,
  },
  answers: [],
});

module.exports = Post;
