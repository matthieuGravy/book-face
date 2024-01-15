const Mailjet = require("node-mailjet");
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.MAIL_API_KEY;
const API_SECRET = process.env.MAIL_SECRET_KEY;

const mailjet = new Mailjet({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

const mj = mailjet.default.connect(API_KEY, API_SECRET);

export default mj;
