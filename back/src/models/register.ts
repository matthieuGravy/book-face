import mongoose, { Schema, Document, CallbackError } from "mongoose";
import { generateKeyPair, SignJWT, jwtVerify } from "jose";

const bcrypt = require("bcrypt");

export interface IRegister extends Document {
  username: string;
  password: string;
  email: string;
  hashedPassword: string;
  registerDate: Date;
  checkPassword: (password: string) => Promise<boolean>;
  isModified: (path: string) => boolean;
  generateJWT: () => Promise<string>;
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
// Générer une nouvelle paire de clés lors du démarrage de l'application
let privateKey: any;
let publicKey: any;

generateKeyPair("RS256").then((keys) => {
  privateKey = keys.privateKey;
  publicKey = keys.publicKey;
});

registerSchema.methods.generateJWT = async function () {
  if (!privateKey) {
    throw new Error("Private key is not set");
  }

  const jwt = await new SignJWT({ sub: this._id, username: this.username })
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .sign(privateKey);
  return jwt;
};

registerSchema.statics.verifyJWT = async function (jwt: string) {
  if (!publicKey) {
    throw new Error("Public key is not set");
  }

  try {
    const { payload } = await jwtVerify(jwt, publicKey);
    console.log("JWT payload:", payload);
    return JSON.parse(payload.toString());
  } catch (err) {
    console.error("Invalid JWT:", err);
    return null;
  }
};

registerSchema.pre("save", async function (next) {
  const user = this as IRegister;

  // Only hash the password if it has been modified or is new
  if (!user.isModified("password")) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.hashedPassword = hashedPassword; // Update hashedPassword field
    console.log("Password hashed successfully:", hashedPassword);
    next();
  } catch (err: any) {
    console.error("Error hashing password:", err);
    next(err as CallbackError);
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
