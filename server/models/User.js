const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["male", "female", "other"],
    },
    contactNumber: {
      type: String,
      required: [true, "Contact number is required"],
      match: [/^\d{10}$/, "Contact number must be 10 digits"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    profilePic: {
      type: String, // Store the file path or URL of the uploaded profile picture
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    terms: {
      type: Boolean,
      required: [true, "Agreement to terms is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
