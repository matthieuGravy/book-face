import { IProfile } from "../models/profile";
import Profile from "../models/profile";

class ProfileService {
  async createOrUpdateProfile(profileData: IProfile) {
    const profile = await Profile.findOneAndUpdate(
      { userId: profileData.userId }, // critère de recherche
      profileData, // nouvelles données
      { new: true, upsert: true } // options
    );

    // Renvoie le profil complet après sa création ou sa mise à jour
    return profile;
  }

  async getProfile(userId: string) {
    return await Profile.findOne({ userId });
  }

  // Autres méthodes à ajouter ici
}

export default new ProfileService();
