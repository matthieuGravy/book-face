"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
//Mongoose et dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbURI = process.env.DB_URI;
exports.app = (0, express_1.default)();
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
    }
    catch (err) {
        console.log(err);
    }
};
exports.app.use((req, _, next) => {
    console.log(req.url);
    next();
});
connectDB();
exports.app.listen(4900);
