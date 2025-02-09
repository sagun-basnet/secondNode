// const express = require('express');
import express from "express";
import userRoute from "./router/userRoute.js";

const app = express();

app.use(express.json());
const port = 5000;

app.use("/api", userRoute); //   /api/insert-user

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
