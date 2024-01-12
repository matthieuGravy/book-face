"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_1 = __importDefault(require("../services/profile"));
const router = (0, express_1.Router)();
// Route pour créer un profil
router.post("/", async (req, res) => {
    try {
        const profile = await profile_1.default.createProfile(req.body);
        res.status(201).json(profile);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ message: err.message });
        }
        else {
            console.error(err);
            res.status(500).json({ message: "An error occurred" });
        }
    }
});
// Route pour récupérer un profil
router.get("/:userId", async (req, res) => {
    try {
        const profile = await profile_1.default.getProfile(req.params.userId);
        if (profile) {
            res.json(profile);
        }
        else {
            res.status(404).json({ message: "Profile not found" });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            res.status(500).json({ message: err.message });
        }
        else {
            console.error(err);
            res.status(500).json({ message: "An error occurred" });
        }
    }
});
exports.default = router;
