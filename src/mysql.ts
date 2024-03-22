import mysql from "mysql2/promise";

export function createPool() {
  return mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3306,
    database: "Flat",
  })
};
