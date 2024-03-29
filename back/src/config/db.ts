//Mongoose et dotenv
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbURI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
