"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../models/register"));
class AuthService {
    async login(email, password) {
        try {
            const register = await register_1.default.findOne({ email }).select("+hashedPassword");
            if (!register) {
                console.log("User not found with email:", email);
                return null; // L'utilisateur n'existe pas
            }
            const passwordMatch = await register.checkPassword(password);
            if (passwordMatch) {
                console.log("User logged in successfully:", email);
                const jwt = await register.generateJWT(); // Générer un JWT pour l'utilisateur
                return { user: register, jwt }; // Retourner l'utilisateur et le JWT
            }
            else {
                console.log("Invalid password for user:", email);
                return null;
            }
        }
        catch (err) {
            console.error("Error during login:", err);
            throw err;
        }
    }
}
exports.default = AuthService;
