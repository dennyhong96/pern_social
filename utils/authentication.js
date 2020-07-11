const jwt = require("jsonwebtoken");
const pool = require("../postgres");

exports.auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ error: "No token, please login" });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }

  try {
    const user = await pool.query("SELECT * FROM users WHERE id = $1 ;", [
      decoded.id,
    ]);

    if (!user.rows.length) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user.rows[0];
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
