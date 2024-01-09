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
}, {
    collection: "register",
});
registerSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    bcrypt.hash(user.password, 10, (err, hashedPassword) => {
        if (err) {
            return next(err);
        }
        user.password = hashedPassword;
        next();
    });
}); // Ajout de l'accolade fermante ici
registerSchema.methods.checkPassword = async function (password) {
    const user = this;
    try {
        return await bcrypt.compare(password, user.password);
    }
    catch (err) {
        throw err;
    }
};
const Register = mongoose_1.default.model("Register", registerSchema);
exports.default = Register;
