import Register, { IRegister } from "../models/register";
import Profile, { IProfile } from "../models/profile";
import ProfileService from "./profile";

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
    const savedRegister = await newRegister.save(); // Sauvegarder d'abord le nouvel utilisateur

    const profileData: Partial<IProfile> = {
      userId: savedRegister._id, // Utiliser l'ID du nouvel utilisateur
      firstname: "",
      lastname: "",
      birthdate: null,
      genre: "",
      city: "",
      country: "",
      picture: "",
      description: "",
    };
    await ProfileService.createOrUpdateProfile(profileData); // Utiliser la méthode correcte de ProfileService

    const jwt = await savedRegister.generateJWT();
    savedRegister.jwt = jwt;

    return await savedRegister.save();
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
    return await Register.findById(id);
  }
  async deleteUser(id: string): Promise<boolean> {
    try {
      const deletedUser = await Register.findByIdAndDelete(id);

      // Vérifier si un utilisateur a été supprimé
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
