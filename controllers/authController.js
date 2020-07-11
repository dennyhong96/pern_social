const pool = require("../postgres");

const registerValidator = require("../utils/validators/register");

exports.register = async (req, res, next) => {
  try {
    // Handle invalid input fields
    const { errors, isValid } = registerValidator(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }

    // Create user
    const { handle, email, password } = req.body;
    const user = await pool.query(
      "INSERT INTO users(handle, email, password) VALUES($1, $2, $3) RETURNING * ;",
      [handle, email, password]
    );
    console.log(user.rows);
  } catch (error) {
    console.error(error);
  }
};
