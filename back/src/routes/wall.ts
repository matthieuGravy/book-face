import express from "express";
import PublicationService from "../services/publications";

const router = express.Router();
// récupèrer toutes les publications
// erreur n'affiche pas les publications si pas de nouvelles publications ajoutées
router.get("/", async (_req, res) => {
  try {
    const publicationService = new PublicationService();
    console.log("PublicationService", publicationService); // Ajout d'un log ici
    const posts = await publicationService.getAllPosts(); // Utilisez publicationService, pas PublicationService
    console.log("Posts", posts); // Ajout d'un log ici
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
