const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = {
  // middleware to check if the user is authenticated
  isAuthenticated: async (req, res, next) => {
    // get the token from the cookies
    const token = req.cookies.token;

    // send an error if the token is not present
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    // verify the token
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
    } catch (error) {
      return res.status(401).json({ error: "Invalid Token" });
    }

    next();
  },
};

module.exports = auth;
