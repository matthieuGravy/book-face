"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_1 = __importDefault(require("../models/register"));
class RegisterService {
    async createRegister(email) {
        const newRegister = new register_1.default({
            email,
        });
        return await newRegister.save();
    }
    async getAllRegisters() {
        return await register_1.default.find();
    }
}
exports.default = RegisterService;
