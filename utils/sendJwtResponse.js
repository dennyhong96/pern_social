const jwt = require("jsonwebtoken");

/**
 * Sign a jwt with user id as payload and expires in 7 days
 * @function sendJwtResponse
 * @param {object} user - user from database
 * @param {number} statusCode - statusCode to send to client
 * @param {object} res - express.js response object
 */
module.exports = (user, statusCode, res) => {
  const payload = { id: user.id };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
  res.status(statusCode).json({ token });
};
