import mongoose, { Schema, Document } from "mongoose";

export interface IPublication extends Document {
  userId: mongoose.Schema.Types.ObjectId; // Référence au modèle Register IRegister
  description: string;
  categorie: string;
  createdAt: Date;
  updatedAt: Date;
  hash: string;
  filename: string;
}

const publicationSchema = new Schema<IPublication>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Register", // Référence au modèle Register IRegister
    },
    description: {
      type: String,
      required: false,
      unique: false,
    },
    categorie: {
      type: String,
      required: true,
      unique: false,
    },
    createdAt: {
      type: Date,
      required: false,
      unique: false,
    },
    updatedAt: {
      type: Date,
      required: false,
      unique: false,
    },
    filename: {
      type: String,
      required: false,
      unique: false,
    },
    hash: {
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
