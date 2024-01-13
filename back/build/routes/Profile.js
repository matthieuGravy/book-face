"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = __importDefault(require("../services/profile"));
const router = express_1.default.Router();
router.put("/:userId", async (req, res) => {
    console.log("Received request"); // Ajout d'un log ici
    const profileData = req.body;
    const userId = req.params.userId;
    try {
        console.log("Updating profile"); // Ajout d'un log ici
        const updatedProfile = await profile_1.default.createOrUpdateProfile({
            ...profileData,
            userId,
        });
        console.log("Profile updated", updatedProfile); // Ajout d'un log ici
        res.json(updatedProfile);
    }
    catch (err) {
        console.error("Error occurred", err); // Modification du log d'erreur pour inclure le message d'erreur
        res.status(500).send("Erreur du serveur");
    }
});
router.post("/:profileId/post", async (req, res) => {
    try {
        const profileId = req.params.profileId;
        const postData = req.body;
        const post = await profile_1.default.createPost(profileId, postData);
        res.json(post);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.toString() });
        }
        else {
            res.status(500).json({ error: "Une erreur inconnue s'est produite" });
        }
    }
    // récupèrer les publication d'un user
    router.get("/:profileId/posts", async (req, res) => {
        try {
            const profileId = req.params.profileId;
            const posts = await profile_1.default.getPosts(profileId);
            res.json(posts);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.toString() });
            }
            else {
                res.status(500).json({ error: "Une erreur inconnue s'est produite" });
            }
        }
    });
});
exports.default = router;
