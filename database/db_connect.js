const db = require("mysql");

const conn = db.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "Taxi",
});

module.exports = conn;
