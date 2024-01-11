import express, { Application } from "express";

import connectDB from "./config/db";
import registerRoutes from "./routes/register";
import authRoutes from "./routes/auth";
import logoutRoutes from "./routes/logout";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// routes pour data front
app.use("/register", registerRoutes);
app.use("/login", authRoutes);
app.use("/logout", logoutRoutes);

app.listen(4900);
