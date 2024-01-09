import mongoose, { Schema, Document } from "mongoose";

// Définir les types de l'interface d'un document de la collection "register"
export interface IRegister extends Document {
  email: string;
  registerDate: Date;
}

const registerSchema = new Schema<IRegister>(
  {
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

const Register = mongoose.model<IRegister>("Register", registerSchema);

export default Register;
