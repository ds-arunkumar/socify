// import mongoose
const mongoose = require("mongoose");

// create a schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  Author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// create a post model and export it
module.exports = mongoose.model("Post", postSchema, "posts");
