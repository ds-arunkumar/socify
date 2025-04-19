const express = require("express");

const {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/postController");

// create new router
const postsRouter = express.Router();

postsRouter.post("/", createRecipe);
postsRouter.get("/", getRecipes);
postsRouter.get("/:id", getRecipe);
postsRouter.put("/:id", updateRecipe);
postsRouter.delete("/:id", deleteRecipe);

module.exports = postsRouter;
