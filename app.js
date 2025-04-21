const express = require("express");
const postsRouter = require("./routes/postsRoutes");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

// parse the request body
app.use(express.json());

// parse cookies
app.use(cookieParser());

app.use("/post", postsRouter);
app.use("/auth", authRouter);

module.exports = app;
