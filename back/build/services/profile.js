"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = __importDefault(require("../models/profile"));
const publications_1 = __importDefault(require("../models/publications")); // Assurez-vous que le chemin est correct
//import { IPublication } from "../models/publications"; // Assurez-vous que le chemin est correct
class ProfileService {
    async createOrUpdateProfile(profileData) {
        const profile = await profile_1.default.findOneAndUpdate({ userId: profileData.userId }, // critère de recherche
        profileData, // nouvelles données
        { new: true, upsert: true } // options
        );
        // Renvoie le profil complet après sa création ou sa mise à jour
        return profile;
    }
    // créer une publication (createPost)
    async createPost(profileId, postData) {
        const publication = new publications_1.default(postData);
        await publication.save();
        const profile = await profile_1.default.findById(profileId);
        if (profile) {
            if (!profile.posts) {
                profile.posts = [];
            }
            profile.posts.push(publication._id);
            await profile.save();
        }
        return publication;
    }
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
}
exports.default = new ProfileService();
