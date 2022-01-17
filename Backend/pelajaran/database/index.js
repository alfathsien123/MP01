const mysql = require("mysql");

// const db = mysql.createPool({
//     host: '85.10.205.173',
//     user: 'al12345',
//     password: '6e4aa578',
//     database: 'office1234',
//     port: 3306,
//     multipleStatements: true
// })
const db = mysql.createPool({
  host: "85.10.205.173",
  user: "al12345",
  password: "6e4aa578",
  database: "office1234",
  port: 3306,
  multipleStatements: true,
});

db.getConnection((err, connection) => {
  if (err) {
    return console.error(`error : ${err.message}`);
  }
  console.log(`Connected to MySQL Server`);
});

module.exports = { db };
