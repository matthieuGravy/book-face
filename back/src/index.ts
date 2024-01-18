import express, { Application } from "express";

const cors = require("cors");
const winston = require("winston");

import connectDB from "./config/db";
import registerRoutes from "./routes/register";
import authRoutes from "./routes/auth";
import logoutRoutes from "./routes/logout";
import profileRoutes from "./routes/profile";
import wallRoutes from "./routes/wall";
import forgotpwdRoutes from "./routes/forgotpwd";

const app: Application = express();

// Winston
const { format } = winston;
const { combine, timestamp, printf } = format;

const logFormat = printf(
  ({
    level,
    message,
    timestamp,
  }: {
    level: string;
    message: string;
    timestamp: string;
  }) => {
    return `${timestamp} ${level}: ${message}`;
  }
);

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), logFormat),
  transports: [
    new winston.transports.File({ filename: "logfile.log", level: "info" }),
    new winston.transports.Console(),
  ],
});

// Utilisation du logger
logger.info("Ceci est un message d'information dans le fichier journal.");

// CORS middleware
const corsOptions = {
  origin: ["http://localhost:5218"],
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
app.use("/wall", wallRoutes);
app.use("/forgot", forgotpwdRoutes);

const port = process.env.PORT || 4900;

app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
