import Register from "../models/register";
import { IRegister } from "../models/register";

import { IProfile } from "../models/profile";
import Profile from "../models/profile";

class RegisterService {
  async createRegister(
    username: string,
    password: string,
    email: string
  ): Promise<IRegister> {
    const newRegister = new Register({
      username,
      password,
      email,
    });
    const jwt = await newRegister.generateJWT();
    newRegister.jwt = jwt;

    return await newRegister.save();
  }
  async createOrUpdateProfile(profileData: IProfile) {
    const profile = await Profile.findOneAndUpdate(
      { userId: profileData.userId }, // critère de recherche
      profileData, // nouvelles données
      { new: true, upsert: true } // options
    );

    // Renvoie le profil complet après sa création ou sa mise à jour
    return profile;
  }

  async getAllRegisters(): Promise<IRegister[]> {
    return await Register.find();
  }
  async getUser(id: string) {
    const user = await Register.findById(id);
    return user;
  }
  async deleteUser(id: string): Promise<boolean> {
    try {
      const deletedUser = await Register.findByIdAndDelete(id);

      // Vérifiez si un utilisateur a été supprimé
      if (deletedUser) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      throw new Error("Error deleting user");
    }
  }
}

export default RegisterService;
