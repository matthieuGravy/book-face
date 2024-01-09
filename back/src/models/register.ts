import mongoose, { Schema, Document } from "mongoose";
import { NextFunction } from "express";
const bcrypt = require("bcrypt");

export interface IRegister extends Document {
  username: string;
  password: string;
  email: string;
  hashedPassword: string;
  registerDate: Date;
  checkPassword: (password: string) => Promise<boolean>;
  isModified: (path: string) => boolean;
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
      select: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    hashedPassword: {
      type: String,
      select: false,
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

registerSchema.pre<IRegister>("save", async function (next: NextFunction) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.hashedPassword = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

registerSchema.methods.checkPassword = async function (
  password: string
): Promise<boolean> {
  const register = this as IRegister;
  try {
    const same = await bcrypt.compare(password, register.hashedPassword);
    return same;
  } catch (err) {
    throw err;
  }
};

const Register = mongoose.model<IRegister>("Register", registerSchema);

export default Register;
