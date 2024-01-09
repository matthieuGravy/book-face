"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../services/auth"));
const router = express_1.default.Router();
const authService = new auth_1.default();
router.post("/register", async (req, res) => {
    const { password, email } = req.body;
    try {
        const register = await authService.register(password, email);
        res.json(register);
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const register = await authService.login(email, password);
        if (register) {
            res.json(register);
        }
        else {
            res.status(401).send("Invalid credentials");
        }
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
