"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const winston = require("winston");
const db_1 = __importDefault(require("./config/db"));
const register_1 = __importDefault(require("./routes/register"));
const auth_1 = __importDefault(require("./routes/auth"));
const logout_1 = __importDefault(require("./routes/logout"));
const profile_1 = __importDefault(require("./routes/profile"));
const app = (0, express_1.default)();
// Winston
const { format } = winston;
const { combine, timestamp, printf } = format;
const logFormat = printf(({ level, message, timestamp, }) => {
    return `${timestamp} ${level}: ${message}`;
});
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
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, db_1.default)();
// routes pour data front
app.use("/register", register_1.default);
app.use("/login", auth_1.default);
app.use("/logout", logout_1.default);
app.use("/profile", profile_1.default);
const port = process.env.PORT || 4900;
app.listen(port, () => console.log(`🍿 Server running on port ${port}`));
