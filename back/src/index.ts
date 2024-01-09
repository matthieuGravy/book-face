import express, { Application, Request, NextFunction } from "express";

import connectDB from "./config/db";

const app: Application = express();
app.use(express.json());

connectDB();

app.use((req: Request, _, next: NextFunction) => {
  console.log(req.url);
  next();
});

app.use(express.json());

app.listen(4900);
