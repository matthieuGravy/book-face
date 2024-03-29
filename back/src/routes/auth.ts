import express, { Router, Request, Response } from "express";
import AuthService from "../services/auth";

const router: Router = express.Router();
const authService = new AuthService();

router.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await authService.login(email, password);
    if (user) {
      res.cookie("jwt", user.jwt, {
        httpOnly: true,
        // secure: true, // Décommenter en https
        //sameSite: "strict", // Décommenter en https
      });
      res.json({ connected: true, jwt: user.jwt });
    } else {
      res.json({ connected: false });
    }
  } catch (err) {
    console.error(err instanceof Error ? err.message : err);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
