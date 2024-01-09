import Register from "../models/register";
import { IRegister } from "../models/register";

class AuthService {
  async login(email: string, password: string): Promise<IRegister | null> {
    try {
      const register = await Register.findOne({ email }).select(
        "+hashedPassword"
      );

      if (!register) {
        console.log("User not found with email:", email);
        return null; // L'utilisateur n'existe pas
      }

      const passwordMatch = await register.checkPassword(password);

      if (passwordMatch) {
        console.log("User logged in successfully:", email);
        return register;
      } else {
        console.log("Invalid password for user:", email);
        return null;
      }
    } catch (err) {
      console.error("Error during login:", err);
      throw err;
    }
  }
}

export default AuthService;
