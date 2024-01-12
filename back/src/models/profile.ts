import mongoose, { Schema, Document } from "mongoose";

export interface IProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId; // Référence au modèle Register IRegister
  firstname: string;
  lastname: string;
  birthdate: Date;
  genre: string;
  city: string;
  country: string;
  picture: string;
  description: string;
}

const profileSchema = new Schema<IProfile>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Register", // Référence au modèle Register IRegister
    },
    firstname: {
      type: String,
      required: false,
      unique: false,
    },
    lastname: {
      type: String,
      required: false,
      unique: false,
    },
    birthdate: {
      type: Date,
      required: false,
      unique: false,
    },
    genre: {
      type: String,
      required: false,
      unique: false,
    },
    city: {
      type: String,
      required: false,
      unique: false,
    },
    country: {
      type: String,
      required: false,
      unique: false,
    },
    picture: {
      type: String,
      required: false,
      unique: false,
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    collection: "profile",
  }
);

const Profile = mongoose.model<IProfile>("Profile", profileSchema);

export default Profile;
