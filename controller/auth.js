import { db } from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const login = (req, res) => {
  const { email, password } = req.body;
  const q = `select * from user where email = ?`;
  db.query(q, [email], (err, data) => {
    if (err) {
      return res.send(err);
    }
    if (data.length === 0) {
      return res.send({ message: "User not found" });
    }

    const checkPassword = bcrypt.compareSync(password, data[0].password);

    if (!checkPassword) {
      return res.send({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      { id: data[0].id /*, role: data[0].role*/ },
      "dddddsecretkey"
    );

    return res.send({ message: "Login successfull", data, token });
  });
};
