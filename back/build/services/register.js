"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../models/register"));
const profile_1 = __importDefault(require("../models/profile"));
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
    async createOrUpdateProfile(profileData) {
        const profile = await profile_1.default.findOneAndUpdate({ userId: profileData.userId }, // critère de recherche
        profileData, // nouvelles données
        { new: true, upsert: true } // options
        );
        // Renvoie le profil complet après sa création ou sa mise à jour
        return profile;
    }
    async getAllRegisters() {
        return await register_1.default.find();
    }
    async getUser(id) {
        const user = await register_1.default.findById(id);
        return user;
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
