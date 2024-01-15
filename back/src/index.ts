import express, { Application } from "express";

import connectDB from "./config/db";
import registerRoutes from "./routes/register";
import authRoutes from "./routes/auth";
import logoutRoutes from "./routes/logout";
import profileRoutes from "./routes/profile";

const app: Application = express();

// CORS middleware
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5", "https://domaine.com"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// routes pour data front
app.use("/register", registerRoutes);
app.use("/login", authRoutes);
app.use("/logout", logoutRoutes);
app.use("/profile", profileRoutes);

app.listen(4900);
