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

    return await newRegister.save();
  }

  async getAllRegisters(): Promise<IRegister[]> {
    return await Register.find();
  }
}

export default RegisterService;