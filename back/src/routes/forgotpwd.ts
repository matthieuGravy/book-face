import express, { Router, Request, Response } from "express";
import { getUserByEmail, getUserPassword } from "../services/forgotpwd";
import Register from "../models/register";
import { sendforgot } from "../config/mailer";

const router: Router = express.Router();

// envoyer un mail pour réinitialiser le mot de passe
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

// modifier le mot de passe de l'utilisateur
router.post("/", async (req: Request, res: Response) => {
  const { email, password, newPassword } = req.body;
  const user = await getUserByEmail(email);
  const userPassword = await getUserPassword(user);
  if (userPassword === password) {
    await Register.findByIdAndUpdate(user, { password: newPassword });
    res.json({ passwordChanged: true });
  } else {
    res.json({ passwordChanged: false });
  }
});

export default router;
