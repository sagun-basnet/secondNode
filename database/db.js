import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "new_schema",
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error: ", err);
  } else {
    console.log("Database connected.....");
  }
});
