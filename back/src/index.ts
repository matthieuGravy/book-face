import express, { Application, Request, NextFunction } from "express";

import connectDB from "./config/db";

const app: Application = express();

connectDB();

app.use((req: Request, _, next: NextFunction) => {
  console.log(req.url);
  next();
});

app.listen(4900);
