import mongoose, { Schema, Document } from "mongoose";

export interface IPublication extends Document {
  userId: mongoose.Schema.Types.ObjectId; // Référence au modèle Register IRegister
  picture: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const publicationSchema = new Schema<IPublication>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Register", // Référence au modèle Register IRegister
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
    timestamps: true,
    collection: "publications",
  }
);

const Publication = mongoose.model<IPublication>(
  "Publication",
  publicationSchema
);

export default Publication;
