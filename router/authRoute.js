import express from "express";

import { register, login } from "../controller/auth.js";

const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);

// routes.get("/get-user", getUser);

export default routes;
