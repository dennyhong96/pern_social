const express = require("express");
const router = express.Router();

const { register, login, loadMe } = require("../controllers/authController");
const { auth } = require("../utils/authentication");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/loadme").get(auth, loadMe);

module.exports = router;
