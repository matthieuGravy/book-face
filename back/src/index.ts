import express, { Application, Request, NextFunction } from "express";
const mongoose = require("mongoose");

export const app: Application = express();

const connectDB = async () => {
  try {
    await mongoose.connect("");
  } catch (err) {
    console.log(err);
  }
};

app.use((req: Request, _, next: NextFunction) => {
  console.log(req.url);
  next();
});

app.listen(4900);
