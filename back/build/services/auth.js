"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcrypt");
const register_1 = __importDefault(require("../models/register"));
class AuthService {
    async register(password, email) {
        const hashedPassword = await bcrypt.hash(password, 10); // Hasher le mot de passe
        const newRegister = new register_1.default({
            hashedPassword, // Utiliser le mot de passe haché
            email,
        });
        return await newRegister.save();
    }
    async login(email, password) {
        const register = await register_1.default.findOne({ email }).select("+hashedPassword");
        if (!register) {
            return null; // L'utilisateur n'existe pas
        }
        const passwordMatch = await register.checkPassword(password);
        if (!passwordMatch) {
            return null; // Mot de passe incorrect
        }
        return register;
    }
}
exports.default = AuthService;
