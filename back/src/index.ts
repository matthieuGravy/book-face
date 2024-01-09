import express, { Application, Request, NextFunction } from "express";

//Mongoose et dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbURI = process.env.DB_URI;

export const app: Application = express();

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    console.log(err);
  }
};

app.use((req: Request, _, next: NextFunction) => {
  console.log(req.url);
  next();
});

connectDB();

app.listen(4900);
