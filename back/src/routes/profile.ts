import { Request, Response, Router } from "express";

import ProfileService from "../services/profile";
const router = Router();

// Route pour créer un profil
router.post("/", async (req: Request, res: Response) => {
  try {
    const profile = await ProfileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).json({ message: err.message });
    } else {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  }
});

// Route pour récupérer un profil
router.get("/:userId", async (req: Request, res: Response) => {
  try {
    const profile = await ProfileService.getProfile(req.params.userId);
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      res.status(500).json({ message: err.message });
    } else {
      console.error(err);
      res.status(500).json({ message: "An error occurred" });
    }
  }
});

export default router;
