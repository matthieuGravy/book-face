import express, { Router, Request, Response } from "express";
import { getUserByEmail } from "../services/forgotpwd";
import Register from "../models/register";
import { sendforgot } from "../config/mailer";

const bcrypt = require("bcrypt");
const router: Router = express.Router();

// envoyer un mail pour réinitialiser le mot de passe
//http://localhost:4900/forgot/send
router.post("/send", async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (user) {
    await sendforgot(email);
    res.json({ emailSent: true });
  } else {
    res.json({ emailSent: false });
  }
});

//http://localhost:4900/forgot
// modifier le mot de passe de l'utilisateur
router.put("/", async (req: Request, res: Response) => {
  const { email, newPassword, confirmPassword } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  console.log(user);
  if (newPassword === confirmPassword) {
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Remplacez 10 par le nombre de tours de hachage que vous utilisez
    await Register.findByIdAndUpdate(user._id, {
      hashedPassword: hashedPassword,
    });
    return res.json({ passwordChanged: true });
  } else {
    return res.json({
      passwordChanged: false,
      error: "Confirmation password does not match",
    });
  }
});

export default router;
