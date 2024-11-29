// SocialMediaManagement.js
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const SocialMediaManagement = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfilePicture(URL.createObjectURL(file)); // Preview the uploaded image
    } else {
      alert("Please upload a valid image file."); // Notify user
    }
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
  };

  const handleCancel = () => {
    setFormData({ fullName: "", email: "", newPassword: "", confirmPassword: "" });
    setProfilePicture(null);
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-12">
      {/* Header */}
      <div className="w-full max-w-4xl bg-teal-600 text-white p-4 rounded-md shadow-md flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold">Profile Information</h1>
        <button className="bg-green-500 px-4 py-2 rounded shadow-md hover:bg-green-600 transition-all">
          Edit Profile
        </button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Profile Picture Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg bg-gray-200">
            <img
              src={profilePicture || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-75 cursor-pointer transition-all"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <FaCamera className="text-white text-xl" />
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*" // Restrict to image files
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
          <p className="text-gray-600 mt-4 text-sm">Click the picture to upload</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Enter your email address"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
              placeholder="Confirm new password"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg transition-all"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
