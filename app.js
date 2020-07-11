require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const morgan = require("morgan");

// Middlewares
const app = express();
app.use(express.json());
app.use(morgan("dev"));

// Mount Routers

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server up on port ${port}...`));
