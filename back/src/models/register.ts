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
registerSchema.pre("save", async function (next: Function) {
  const user = this as IRegister;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    console.log("Password hashed successfully:", hashedPassword);
    next();
  } catch (err) {
    console.error("Error hashing password:", err);
    next(err);
  }
});

registerSchema.methods.checkPassword = async function (password: string) {
  const user = this as IRegister;
  try {
    console.log("Entered checkPassword method");
    console.log("Provided password:", password);
    console.log("Stored hashed password:", user.hashedPassword);
    const hashedPassword = user.hashedPassword;
    const same = await bcrypt.compare(password, hashedPassword);
    console.log("Password comparison result:", same);
    return same;
  } catch (err) {
    console.error("Error in checkPassword:", err);

    throw err;
  }
};

const Register = mongoose.model<IRegister>("Register", registerSchema);

export default Register;
