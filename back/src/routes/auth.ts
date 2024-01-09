import express, { Router, Request, Response } from "express";
import AuthService from "../services/auth";

const router: Router = express.Router();
const authService = new AuthService();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await authService.login(email, password);

    if (user) {
      res.json(user);
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
