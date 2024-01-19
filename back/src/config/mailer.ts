const nodemailer = require("nodemailer");
import mjml2html from "mjml";
const dotenv = require("dotenv");
dotenv.config();

async function sendWelcomeEmail(email: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const htmlOutput = mjml2html(
      `
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
  `
    );

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Welcome vibes",
      html: htmlOutput.html, // Utiliser le HTML généré par MJML
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
  }
}

async function sendforgot(email: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const htmlOutput = mjml2html(
      `
    <mjml>
      <mj-body>
        <mj-section>
          <mj-column>
            <mj-text>
              Voici le liens pour réinitialiser votre mot de passe :
              <a href="http://localhost:5218/ResetPassword">Cliquez ici</a>
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `
    );

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: "Forgot password vibes",
      html: htmlOutput.html, // Utiliser le HTML généré par MJML
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail envoyé :", info.response);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
  }
}

export { sendWelcomeEmail, sendforgot };
