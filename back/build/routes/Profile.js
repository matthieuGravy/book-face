"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = __importDefault(require("../services/profile")); // Assurez-vous d'importer ProfileService
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
exports.default = router;
