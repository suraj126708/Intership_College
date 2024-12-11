import React, { useState } from "react";
import InputField from "../components/InputField";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess, handleError } from "../utils.js";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    contactNumber: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    profilePic: null, // To store the uploaded file
    address: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Name is required";
    if (!formData.age || isNaN(formData.age) || formData.age <= 0)
      newErrors.age = "Valid age is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.bloodGroup) newErrors.bloodGroup = "Blood Group is required";
    if (!/^\d{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Contact Number must be 10 digits";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid Email format";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.terms) newErrors.terms = "You must agree to the terms";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      handleError(validationErrors);
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      // Prepare form data for submission
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "profilePic" && formData[key]) {
          formDataToSend.append(key, formData[key]); // Attach the file
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });

      // API call
      await axios.post(
        "https://intership-college.onrender.com/api/auth/signup",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      handleSuccess("Successfully registered!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      const apiError = error.response?.data || error.message;
      handleError(apiError.message || "An error occurred during registration");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-3xl mx-auto mt-16 p-8 bg-gray-100 shadow-md rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Gym Registration</h2>

      <InputField
        label="Name"
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />

      <InputField
        label="Age"
        type="number"
        id="age"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
      />

      <InputField
        label="Date of Birth"
        type="date"
        id="dob"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        error={errors.dob}
      />

      <InputField
        label="Gender"
        type="select"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        error={errors.gender}
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
      />

      <InputField
        label="Blood Group"
        type="text"
        id="bloodGroup"
        name="bloodGroup"
        placeholder="Enter Blood Group"
        value={formData.bloodGroup}
        onChange={handleChange}
        error={errors.bloodGroup}
      />

      <InputField
        label="Contact"
        type="tel"
        id="contactNumber"
        name="contactNumber"
        placeholder="Enter Contact Number"
        value={formData.contactNumber}
        onChange={handleChange}
        error={errors.contactNumber}
      />

      <InputField
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Username"
        type="text"
        id="username"
        name="username"
        placeholder="Enter Username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />

      <InputField
        label="Password"
        type="password"
        id="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <InputField
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <InputField
        label="Profile Picture"
        type="file"
        id="profilePic"
        name="profilePic"
        onChange={handleChange}
        accept="image/*"
        error={errors.profilePic}
      />

      <InputField
        label="Address"
        type="text"
        id="address"
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
        error={errors.address}
      />

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="mr-2 bg-transparent"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label htmlFor="terms" className="text-sm font-medium text-gray-700">
          I agree to the{" "}
          <Popup
            trigger={<a className="underline text-blue-500">Terms</a>}
            modal
            closeOnDocumentClick
            overlayStyle={{
              background: "rgba(0, 0, 0, 0.5)",
            }}
            contentStyle={{
              width: "400px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            }}
          >
            {(close) => (
              <div>
                <h2 className="font-bold text-lg mb-4">Terms and Conditions</h2>
                <p>By registering, you agree to our terms.</p>
                <button
                  onClick={close}
                  className="bg-blue-500 text-white py-1 px-4 mt-4"
                >
                  Close
                </button>
              </div>
            )}
          </Popup>
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Register
      </button>

      <div className="text-center mt-4">
        Already registered?{" "}
        <Link to="/login" className="text-blue-500 underline">
          Login here
        </Link>
      </div>
    </form>
  );
};

export default RegistrationPage;
