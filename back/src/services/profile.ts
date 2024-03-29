import Profile from "../models/profile";
import { IProfile } from "../models/profile";
import Publication from "../models/publications"; // Assurez-vous que le chemin est correct
//import { IPublication } from "../models/publications"; // Assurez-vous que le chemin est correct

class ProfileService {
  async createOrUpdateProfile(profileData: Partial<IProfile>) {
    const profile = await Profile.findOneAndUpdate(
      { userId: profileData.userId }, // critère de recherche
      profileData, // nouvelles données
      { new: true, upsert: true } // options
    );

    // Renvoie le profil complet après sa création ou sa mise à jour
    return profile;
  }

  // créer une publication (createPost)
  async createPost(profileId: string, postData: any) {
    const publication = new Publication(postData);
    await publication.save();

    const profile = await Profile.findById(profileId);
    if (profile) {
      if (!profile.posts) {
        profile.posts = [];
      }
      profile.posts.push(publication._id);
      await profile.save();
    }

    return publication;
  }
}

export default new ProfileService();
