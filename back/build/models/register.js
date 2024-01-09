"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt = require("bcrypt");
const registerSchema = new mongoose_1.Schema({
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
}, {
    collection: "register",
});
// Avant de sauvegarder un document, hash le mot de passe
registerSchema.pre("save", async function (next) {
    const register = this;
    if (!register.isModified("password")) {
        return next();
    }
    try {
        const hashedPassword = await bcrypt.hash(register.password, 10);
        register.password = hashedPassword;
        next();
    }
    catch (err) {
        if (err instanceof Error) {
            return next(err);
        }
        else {
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
const Register = mongoose_1.default.model("Register", registerSchema);
exports.default = Register;
