"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//logout
router.post("/", (_, res) => {
    res.clearCookie("jwt");
    res.json({ loggedOut: true });
});
exports.default = router;
