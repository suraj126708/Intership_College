const joi = require("joi");

const signUpValidation = (req, res, next) => {
  const schema = joi.object({
    Name: joi.string().min(3).max(100).required(),
    dob: joi.date().less("now").required(), // Validate date of birth as a past date
    gender: joi.string().valid("male", "female", "other").required(),
    contactNumber: joi
      .string()
      .pattern(/^\d{10}$/, "Contact number must be 10 digits")
      .required(),
    email: joi.string().email().required(),
    username: joi.string().min(3).max(50).required(),
    password: joi.string().min(6).required(),
    profilePic: joi.string().optional(), // Allow profilePic to be optional during signup
    address: joi.string().min(5).required(),
    terms: joi.boolean().valid(true).required(), // The user must agree to the terms
  });

  const { error } = schema.validate({
    ...req.body,
    profilePic: req.file ? req.file.path : undefined, // Use the file path for profile picture if uploaded
  });

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { signUpValidation, loginValidation };
