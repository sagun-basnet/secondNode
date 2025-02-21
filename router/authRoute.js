import express from "express";

import { register } from "../controller/auth.js";

const routes = express.Router();

routes.post("/register", register);

// routes.get("/get-user", getUser);

export default routes;
