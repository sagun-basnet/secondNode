import { db } from "../database/db.js";
// export const insertUser = (req, res) => {
//   const { name, email, password, phone } = req.body;
//   const q =
//     "insert into user (`name`, `email`, `password`, `phone`) values(?,?,?,?)";
//   db.query(q, [name, email, password, phone], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

// export const getUser = (req, res) => {
//   const role = "user";
//   const q = "select * from user where role = ? ";
//   db.query(q, [role], (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.json({ result, message: "User found" });
//     }
//   });
// };

export const insertUser = (req, res) => {
  const { name, email, password } = req.body;

  const q = "insert into user(name, email, password) values(?,?,?)";

  db.query(q, [name, email, password], (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send({ result, message: "User inserted successfully" });
  });
};
