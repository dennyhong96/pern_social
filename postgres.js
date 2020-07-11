const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.PG_USER,
  port: 5432,
  host: "localhost",
  database: "social",
  password: process.env.PG_PW,
});

module.exports = pool;
