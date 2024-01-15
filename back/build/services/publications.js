"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publications_1 = __importDefault(require("../models/publications"));
class PublicationService {
    // récupèrer les publication d'un user (getPosts)
    async getPosts(profileId) {
        try {
            const publications = await publications_1.default.find({ userId: profileId });
            console.log(`Publications: ${JSON.stringify(publications)}`); // Log the publications
            return publications;
        }
        catch (error) {
            console.error(`Error while getting posts: ${error}`);
            throw error;
        }
    }
    // récupèrer toutes les publications (getAllPosts)
    async getAllPosts() {
        try {
            const publications = await publications_1.default.find();
            console.log(`Publications: ${JSON.stringify(publications)}`); // Log the publications
            return publications;
        }
        catch (error) {
            console.error(`Error while getting posts: ${error}`);
            throw error;
        }
    }
}
exports.default = PublicationService;
