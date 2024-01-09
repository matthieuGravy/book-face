import mongoose, { Schema, Document } from "mongoose";
const bcrypt = require("bcrypt");

// Définir les types de l'interface d'un document de la collection "register"
export interface IRegister extends Document {
  username: string;
  password: string;
  email: string;
  registerDate: Date;
}

const registerSchema = new Schema<IRegister>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Ne pas renvoyer le mot de passe par défaut
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    registerDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "register",
  }
);

// Avant de sauvegarder un document, hash le mot de passe
registerSchema.pre<IRegister>("save", async function (next) {
  const register = this;

  if (!register.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(register.password, 10);
    register.password = hashedPassword;
    next();
  } catch (err) {
    if (err instanceof Error) {
      return next(err);
    } else {
      return next(new Error(String(err)));
    }
  }
});

// Vérifier le mot de passe
/*
registerSchema.methods.checkPassword = async function (
  password: string
): Promise<boolean> {
  try {
    const same = await bcrypt.compare(password, this.password);
    return same;
  } catch (err) {
    throw err;
  }
};
*/
const Register = mongoose.model<IRegister>("Register", registerSchema);

export default Register;
