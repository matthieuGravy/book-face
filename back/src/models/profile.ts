import mongoose, { Schema, Document, CallbackError } from "mongoose";

export interface IProfile extends Document {
  firstname: string;
  lastname: string;
  birthdate: Date;
  genre: string;
  city: string;
  country: string;
  picture: string;
  description: string;
}

const registerSchema = new Schema<IProfile>(
  {
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
    collection: "register",
  }
);
