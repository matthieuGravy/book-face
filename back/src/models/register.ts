import mongoose, { Schema, Document } from "mongoose";

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
registerSchema.pre("save", function (next: Function) {
  const user = this as IRegister;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.hash(user.password, 10, (err: Error, hashedPassword: string) => {
    if (err) {
      return next(err);
    }

    user.password = hashedPassword;
    next();
  });
}); // Ajout de l'accolade fermante ici

registerSchema.methods.checkPassword = async function (password: string) {
  const user = this as IRegister;
  try {
    return await bcrypt.compare(password, user.password);
  } catch (err) {
    throw err;
  }
};

const Register = mongoose.model<IRegister>("Register", registerSchema);

export default Register;
