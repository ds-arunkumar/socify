const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user");

const auth = {
  // middleware to check if the user is authenticated
  isAuthenticated: async (req, res, next) => {
    // get the token from the authorization header
    const token = req.headers.authorization.split(" ")[1];

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

  // middleware to check if the user has the required roles
  allowRoles: (roles) => {
    return async (req, res, next) => {
      // get the userId from the request object
      const userId = req.userId;

      // get the user role from the database
      const user = await User.findById(userId);

      // check if the user has the required role
      if (!roles.includes(user.role)) {
        return res.status(500).json({ message: "Access Forbidden" });
      }

      next();
    };
  },
};

module.exports = auth;
