import Register from "../models/register";
import { IRegister } from "../models/register";

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

  async getAllRegisters(): Promise<IRegister[]> {
    return await Register.find();
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
