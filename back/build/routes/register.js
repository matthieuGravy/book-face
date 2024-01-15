"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_1 = __importDefault(require("../services/register"));
const mailer_1 = require("../config/mailer");
const router = express_1.default.Router();
const registerService = new register_1.default();
router.get("/", async (_, res) => {
    try {
        const registers = await registerService.getAllRegisters();
        res.json(registers);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
//supprimer un user
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await registerService.deleteUser(id); // Utilisez registerService au lieu de userService
    if (deletedUser) {
        res.json({ deleted: true });
    }
    else {
        res.status(404).send("User not found");
    }
});
//modifier un user
router.get("/:id/", async (req, res) => {
    const { id } = req.params;
    try {
        const getuser = await registerService.getUser(id);
        if (getuser) {
            res.json(getuser);
        }
        else {
            res.status(404).send("User not found");
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while retrieving the user");
    }
});
router.post("/", async (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        res.status(400).json({
            error: "Veuillez fournir tous les champs nécessaires (username, password, email).",
        });
        return;
    }
    try {
        (0, mailer_1.sendWelcomeEmail)(email);
        const register = await registerService.createRegister(username, password, email);
        res.json(register);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
