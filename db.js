"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    database: getDatabaseUri(),
    host: "bubble.db.elephantsql.com";
    port: 5432
  });
} else {
  db = new Client({
    database: getDatabaseUri(),
    port: 5432
  });
  
}

console.log("database object:", db);

db.connect();

module.exports = db;