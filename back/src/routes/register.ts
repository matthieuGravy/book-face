import express, { Router, Request, Response } from "express";

import RegisterService from "../services/register";
import { sendWelcomeEmail } from "../config/mailer";

const router: Router = express.Router();
const registerService = new RegisterService();

//récupérer tous les users
router.get("/", async (_, res: Response) => {
  try {
    const registers = await registerService.getAllRegisters();
    res.json(registers);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

//supprimer un user
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedUser = await registerService.deleteUser(id); // Utilisez registerService au lieu de userService
  if (deletedUser) {
    res.json({ deleted: true });
  } else {
    res.status(404).send("User not found");
  }
});

//modifier un user
router.get("/:id/", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const getuser = await registerService.getUser(id);
    if (getuser) {
      res.json(getuser);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving the user");
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(400).json({
      error:
        "Veuillez fournir tous les champs nécessaires (username, password, email).",
    });
    return;
  }
  try {
    sendWelcomeEmail(email);
    const register = await registerService.createRegister(
      username,
      password,
      email
    );
    res.json(register);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
