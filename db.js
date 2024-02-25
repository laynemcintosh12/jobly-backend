"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  console.log("DBURI:", getDatabaseUri());
  db = new Client({
    database: getDatabaseUri(),
    port: 5432
  });
} else {
  db = new Client({
    database: getDatabaseUri(),
    port: 5432
  });
  console.log(db);
}

db.connect();

module.exports = db;