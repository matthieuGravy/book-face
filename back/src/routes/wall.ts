import express from "express";
import PublicationService from "../services/publications";

const router = express.Router();
// récupèrer toutes les publications
router.get("/", async (_req, res) => {
  try {
    const publicationService = new PublicationService();
    console.log("PublicationService", publicationService);
    const posts = await publicationService.getAllPosts();
    console.log("Posts", posts);
    res.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    } else {
      res.status(500).json({ error: "Une erreur inconnue s'est produite" });
    }
  }
});

export default router;
