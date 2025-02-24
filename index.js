// const express = require('express');
import express from "express";
import userRoute from "./router/userRoute.js";
import authRoute from "./router/authRoute.js";
import fileRoute from "./router/fileRoute.js";

import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();

app.use(express.json());
const port = process.env.PORT;

app.use(cors());

app.use("/api", userRoute); //   /api/insert-user
app.use("/api", authRoute);
app.use("/api", fileRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
