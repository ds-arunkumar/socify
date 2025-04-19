const express = require("express");
const postsRouter = require("./routes/postsRoutes");

const app = express();

// parse the request body
app.use(express.json());

app.use("/post", postsRouter);

module.exports = app;
