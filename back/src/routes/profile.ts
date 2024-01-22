import express from "express";
import ProfileService from "../services/profile";
import PublicationService from "../services/publications";
import ImageService from "./../services/images";
import multer from "multer";

const router = express.Router();
const imageService = new ImageService();
const upload = multer({ storage: imageService.getStorage() });

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

router.post("/:profileId/post", upload.single("image"), async (req, res) => {
  try {
    const profileId = req.params.profileId;
    const postData = req.body;
    if (req.file) {
      postData.filename = req.file.filename;
    } else {
      // Handle the case where no file was uploaded
    }
    const post = await ProfileService.createPost(profileId, postData);
    res.json(post);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.toString() });
    } else {
      res.status(500).json({ error: "Une erreur inconnue s'est produite" });
    }
  }

  // récupèrer les publication d'un user
  router.get("/:profileId/posts", async (req, res) => {
    try {
      const publicationService = new PublicationService();
      const profileId = req.params.profileId;
      const posts = await publicationService.getPosts(profileId); // Utilisez publicationService, pas PublicationService
      res.json(posts);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.toString() });
      } else {
        res.status(500).json({ error: "Une erreur inconnue s'est produite" });
      }
    }
  });
});

export default router;
