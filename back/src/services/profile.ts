import Profile from "../models/profile";
import { IProfile } from "../models/profile";

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

  // Ajoutez d'autres méthodes au besoin
}

export default new ProfileService();