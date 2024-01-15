"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeEmail = void 0;
const nodemailer = require("nodemailer");
const mjml_1 = __importDefault(require("mjml"));
const dotenv = require("dotenv");
dotenv.config();
async function sendWelcomeEmail(email) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS, // Remplacez par le mot de passe d'application généré
            },
        });
        const htmlOutput = (0, mjml_1.default)(`
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>
              Inscription réussie !
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `);
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: email,
            subject: "Welcome vibes",
            html: htmlOutput.html, // Utilisez le HTML généré par MJML
        };
        const info = await transporter.sendMail(mailOptions);
        console.log("E-mail envoyé :", info.response);
    }
    catch (error) {
        console.error("Erreur lors de l'envoi de l'e-mail :", error);
    }
}
exports.sendWelcomeEmail = sendWelcomeEmail;
