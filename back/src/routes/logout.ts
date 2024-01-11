import express, { Router, Request, Response } from "express";
const router: Router = express.Router();

//logout
router.post("/", (_: Request, res: Response) => {
  res.clearCookie("jwt");
  res.json({ loggedOut: true });
});

export default router;
