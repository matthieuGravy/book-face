import express, { Router, Request, Response } from "express";

import Register from "../models/register";

const router: Router = express.Router();

// Récupérer tous les utilisateurs
router.get("/register", async (_, res: Response) => {
  try {
    const registers = await Register.find();
    res.json(registers);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      console.error(err.stack);
    }
    res.status(500).send("Erreur serveur");
  }
});

// Créer un nouvel utilisateur
router.post("/register", async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const newRegister = new Register({
      email,
    });

    const register = await newRegister.save();
    res.json(register);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      console.error(err.stack);
    }
  }
});

export default router;
