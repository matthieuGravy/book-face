import express, { Router, Request, Response } from "express";

import RegisterService from "../services/register";

const router: Router = express.Router();
const registerService = new RegisterService();

router.get("/", async (_, res: Response) => {
  try {
    const registers = await registerService.getAllRegisters();
    res.json(registers);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
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
