import { IProfile } from "../models/profile";
import Profile from "../models/profile";

class ProfileService {
  async createProfile(profileData: IProfile) {
    const profile = new Profile(profileData);
    return await profile.save();
  }

  async getProfile(userId: string) {
    return await Profile.findOne({ userId });
  }

  // Ajoutez d'autres méthodes au besoin
}

export default new ProfileService();
