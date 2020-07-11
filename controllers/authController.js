const pool = require("../postgres");
const bcrypt = require("bcryptjs");

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
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await pool.query(
      "INSERT INTO users(handle, email, password) VALUES($1, $2, $3) RETURNING * ;",
      [handle, email, hashedPassword]
    );
    res.status(201).json({ user: user.rows[0] });
  } catch (error) {
    console.error(error);
    if (error.code === "23505") {
      // Handle duplicate credentials
      return res.status(400).json({ error: "Credentials already in use" });
    } else {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
};
