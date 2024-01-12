"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __importDefault(require("../models/profile"));
class ProfileService {
    async createProfile(profileData) {
        const profile = new profile_1.default(profileData);
        return await profile.save();
    }
    async getProfile(userId) {
        return await profile_1.default.findOne({ userId });
    }
}
exports.default = new ProfileService();
