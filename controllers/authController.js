const pool = require("../postgres");
const bcrypt = require("bcryptjs");

const registerValidator = require("../utils/validators/register");
const sendJwtResponse = require("../utils/sendJwtResponse");

// @desc    Register a user
// @route   POST /api/auth/register
// @access  Public
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
    await pool.query("INSERT INTO profiles(user_id) VALUES($1) ;", [
      user.rows[0].id,
    ]);
    sendJwtResponse(user.rows[0], 201, res);
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

// @desc    Login a user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res, next) => {
  try {
    const { handle, password } = req.body;

    // Handle missing fields
    if (!(handle && password)) {
      return res
        .status(400)
        .json({ error: "Handle and password are required" });
    }

    // Handle bad field types
    if (!(typeof handle === "string" && typeof password === "string")) {
      return res
        .status(400)
        .json({ error: "Invalid handle and/or password values" });
    }

    const user = await pool.query("SELECT * FROM users WHERE handle = $1 ;", [
      handle,
    ]);

    // Handle user not found
    if (!user.rows.length) {
      return res.status(404).json({ error: "User not found" });
    }

    // Handle password incorrect
    if (!(await bcrypt.compare(password, user.rows[0].password))) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }

    sendJwtResponse(user.rows[0], 200, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

// @desc    Load logged in user's profile
// @route   POST /api/auth/loadme
// @access  Private
exports.loadMe = async (req, res, next) => {
  try {
    const user = await pool.query(
      `SELECT users.id, handle, photo FROM users
       INNER JOIN profiles ON users.id = profiles.user_id
       WHERE users.id = $1 ;`,
      [req.user.id]
    );
    res.status(200).json({ user: user.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
