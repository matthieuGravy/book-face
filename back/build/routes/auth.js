"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../services/auth"));
const bcrypt = require("bcrypt");
const router = express_1.default.Router();
const authService = new auth_1.default();
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const register = await authService.login(email, password);
        if (register && register.password) {
            const validPassword = await bcrypt.compare(password, register.password);
            if (validPassword) {
                res.json(register);
            }
            else {
                res.status(401).send("Invalid credentials");
            }
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
