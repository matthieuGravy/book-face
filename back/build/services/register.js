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
        // Changez le type de retour à Promise<IRegister | null>
        return await register_1.default.findByIdAndDelete(id);
    }
}
exports.default = RegisterService;
