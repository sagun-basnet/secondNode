import { db } from "../database/db.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  const { name, email, password } = req.body;
  const q = "select * from user where email = ?";
  db.query(q, [email], (err, result) => {
    if (err) {
      return res.send(err);
    }
    if (result.length > 0) {
      return res.send({ message: "User already exists" });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    console.log(hashPassword, ":hashPassword");

    const qr = "insert into user(name, email, password) values(?,?,?)";
    db.query(qr, [name, email, hashPassword], (err, data) => {
      if (err) {
        return res.send(err);
      }
      return res.send({ data, message: "User inserted successfully" });
    });
  });
};
