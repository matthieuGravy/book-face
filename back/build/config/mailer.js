"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Mailjet = require("node-mailjet");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.MAIL_API_KEY;
const API_SECRET = process.env.MAIL_SECRET_KEY;
const mailjet = new Mailjet({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
});
const mj = mailjet.default.connect(API_KEY, API_SECRET);
exports.default = mj;
