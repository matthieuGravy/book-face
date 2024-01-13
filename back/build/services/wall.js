"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publications_1 = __importDefault(require("../models/publications"));
// récupèrer la collection de publications
async;
getPublications();
{
    try {
        const publications = await publications_1.default.find();
        console.log(`Publications: ${JSON.stringify(publications)}`); // Log the publications
        return publications;
    }
    catch (error) {
        console.error(`Error while getting publications: ${error}`);
        throw error;
    }
}
exports.default = new ProfileService();
