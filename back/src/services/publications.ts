import Publication from "../models/publications";

class PublicationService {
  // récupèrer les publication d'un user (getPosts)
  async getPosts(profileId: string) {
    try {
      const publications = await Publication.find({ userId: profileId });
      console.log(`Publications: ${JSON.stringify(publications)}`); // Log the publications
      return publications;
    } catch (error) {
      console.error(`Error while getting posts: ${error}`);
      throw error;
    }
  }

  // récupèrer toutes les publications (getAllPosts)
  async getAllPosts() {
    try {
      const publications = await Publication.find();
      console.log(`Publications: ${JSON.stringify(publications)}`); // Log the publications
      console.log("PublicationService", PublicationService); // Ajout d'un log ici
      return publications;
    } catch (error) {
      console.error(`Error while getting posts: ${error}`);
      throw error;
    }
  }
}

export default PublicationService;
