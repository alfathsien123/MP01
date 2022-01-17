const mysql = require("mysql2");
// const mysql = require("mysql2");

// create db connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

// const connection = mysql.createConnection({
//   host: localhost,
//   port: 3306,
//   database: "db_jcvl_03",
//   user: user,
//   password: password,
// });

// export connection
module.exports = connection;
