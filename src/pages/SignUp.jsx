import React from "react";
import qasfLogo from "../assets/qasf-logo.svg"; // Make sure to replace with the correct path to the logo file

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-blue-400">
      <div className="flex flex-col md:flex-row bg-white/20 backdrop-blur-lg rounded-xl shadow-lg p-6 w-full max-w-6xl">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left p-6">
          <div className="mb-6">
            <img
              src={qasfLogo}
              alt="QASF Logo"
              className="mx-auto md:mx-0 w-40"
            />
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Join QASF Today</h1>
          <p className="text-gray-800 mb-6 text">
            Create your account and become part of our community.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center text-grey-700">
              <span className="text-white rounded-full p-2 mr-3">
                ✅
              </span>
              Access to exclusive QASF resources
            </li>
            <li className="flex items-center text-grey-700">
              <span className="text-white rounded-full p-2 mr-3">
                ✅
              </span>
              Join specialized training programs
            </li>
            <li className="flex items-center text-grey-700">
              <span className="text-white rounded-full p-2 mr-3">
                ✅
              </span>
              Connect with industry professionals
            </li>
            <li className="flex items-center text-grey-700">
              <span className="text-white rounded-full p-2 mr-3">
                ✅
              </span>
              Track your progress in real-time
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Create Account
          </h2>
          <p className="text-sm text-gray-700 mb-6">
            Fill in your details to get started
          </p>
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-semibold text-gray-800"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Full Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Role Selection */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-gray-800"
              >
                Select Role
              </label>
              <select
                id="role"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="student">Student/User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Department Selection */}
            <div className="mb-4">
              <label
                htmlFor="department"
                className="block text-sm font-semibold text-gray-800"
              >
                Select Department
              </label>
              <select
                id="department"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Department</option>
                <option value="hr">Human Resources</option>
                <option value="it">Information Technology</option>
                <option value="marketing">Marketing</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm">
            <p>
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
