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
  async deleteUser(id: string): Promise<IRegister | null> {
    // Changez le type de retour à Promise<IRegister | null>
    return await Register.findByIdAndDelete(id);
  }
}

export default RegisterService;
