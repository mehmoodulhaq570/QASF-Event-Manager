import React from "react";
import qasfLogo from "../assets/qasf-logo.svg"; // Import the QASF logo

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-200 to-blue-400">
      <div className="flex flex-col md:flex-row bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-10 w-full max-w-4xl">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="logo mb-6">
            <img
              src={qasfLogo} // Use the imported logo
              alt="QASF Logo"
              className="mx-auto md:mx-0 w-28"
            />
          </div>
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to QASF</h1>
          <p className="text-gray-800 mb-6 text-sm">
            Login to access your dashboard and manage your account.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            
            <li>✅ Secure authentication system</li>
            <li>✅ Easy dashboard access</li>
            <li>✅ Real-time updates</li>
            <li>✅ Cross-platform compatibility</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Login</h2>
          <p className="text-sm text-gray-700 mb-6">Please enter your credentials</p>
          <form>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
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

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
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

            {/* Forgot Password Link */}
            <div className="text-right mb-4">
              <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
