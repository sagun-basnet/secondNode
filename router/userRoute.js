import express from "express";
// import { getUser } from "../controller/user.js";
// import { insertUser, getUser } from "../controller/user.js";
import { insertUser } from "../controller/user.js";
import { authUser } from "../middleware/authMiddleware.js";

const routes = express.Router();

routes.post("/insert-user", insertUser);

// routes.get("/get-user", getUser);

export default routes;
