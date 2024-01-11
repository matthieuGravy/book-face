"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../models/register"));
class RegisterService {
    async createRegister(username, password, email) {
        const newRegister = new register_1.default({
            username,
            password,
            email,
        });
        const jwt = await newRegister.generateJWT();
        newRegister.jwt = jwt;
        return await newRegister.save();
    }
    async getAllRegisters() {
        return await register_1.default.find();
    }
    async deleteUser(id) {
        try {
            const deletedUser = await register_1.default.findByIdAndDelete(id);
            // Vérifiez si un utilisateur a été supprimé
            if (deletedUser) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error("Error deleting user:", error);
            throw new Error("Error deleting user");
        }
    }
}
exports.default = RegisterService;
