"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../services/auth"));
const router = express_1.default.Router();
const authService = new auth_1.default();
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.login(email, password);
        if (user) {
            res.json({ connected: true });
        }
        else {
            res.json({ connected: false });
        }
    }
    catch (err) {
        console.error(err instanceof Error ? err.message : err);
        res.status(500).send("Internal Server Error");
    }
});
exports.default = router;
