"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_1 = __importDefault(require("../services/register"));
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
router.post("/", async (req, res) => {
    const { email } = req.body;
    try {
        const register = await registerService.createRegister(email);
        res.json(register);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
