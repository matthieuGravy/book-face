import express from "express";
import ProfileService from "../services/profile"; // Assurez-vous d'importer ProfileService

const router = express.Router();

router.put("/:userId", async (req, res) => {
  console.log("Received request"); // Ajout d'un log ici
  const profileData = req.body;
  const userId = req.params.userId;

  try {
    console.log("Updating profile"); // Ajout d'un log ici
    const updatedProfile = await ProfileService.createOrUpdateProfile({
      ...profileData,
      userId,
    });
    console.log("Profile updated", updatedProfile); // Ajout d'un log ici
    res.json(updatedProfile);
  } catch (err) {
    console.error("Error occurred", err); // Modification du log d'erreur pour inclure le message d'erreur
    res.status(500).send("Erreur du serveur");
  }
});

export default router;
