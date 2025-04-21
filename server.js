const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB!");

    // start the server
    app.listen(4001, () => {
      console.log("Server started on http://localhost:4001");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB!", err);
  });
