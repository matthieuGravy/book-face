import express, { Router, Request, Response } from "express";
import AuthService from "../services/auth";

const router: Router = express.Router();
const authService = new AuthService();

router.post("/register", async (req: Request, res: Response) => {
  const { password, email } = req.body;

  try {
    const register = await authService.register(password, email);
    res.json(register);
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const register = await authService.login(email, password);

    if (register) {
      res.json(register);
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
