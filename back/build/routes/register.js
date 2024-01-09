"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_1 = __importDefault(require("../models/register"));
const router = express_1.default.Router();
// Récupérer tous les utilisateurs
router.get("/", async (_, res) => {
    try {
        const registers = await register_1.default.find();
        res.json(registers);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            console.error(err.stack);
        }
        res.status(500).send("Erreur serveur");
    }
});
// Créer un nouvel utilisateur
router.post("/", async (req, res) => {
    const { email } = req.body;
    try {
        const newRegister = new register_1.default({
            email,
        });
        const register = await newRegister.save();
        res.json(register);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
            console.error(err.stack);
        }
    }
});
exports.default = router;
