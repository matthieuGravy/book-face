const bcrypt = require("bcrypt");

import Register from "../models/register";
import { IRegister } from "../models/register";

class AuthService {
  async register(password: string, email: string): Promise<IRegister> {
    const hashedPassword = await bcrypt.hash(password, 10); // Hasher le mot de passe
    const newRegister = new Register({
      hashedPassword, // Utiliser le mot de passe haché
      email,
    });

    return await newRegister.save();
  }

  async login(email: string, password: string): Promise<IRegister | null> {
    const register = await Register.findOne({ email }).select(
      "+hashedPassword"
    );

    if (!register) {
      return null; // L'utilisateur n'existe pas
    }

    const passwordMatch = await register.checkPassword(password);

    if (!passwordMatch) {
      return null; // Mot de passe incorrect
    }

    return register;
  }

  // Vous pouvez ajouter d'autres méthodes pour gérer le logout, la réinitialisation du mot de passe, etc.
}

export default AuthService;
