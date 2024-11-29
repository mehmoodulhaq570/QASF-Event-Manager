// import React from 'react';
// import qasfLogo from '../assets/qasf-logo.svg';

// const GetStarted = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-200 to-blue-400">
//       <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-md w-full text-center">
//         {/* Logo */}
//         <img src={qasfLogo} alt="QASF Logo" className="mx-auto mb-6 w-30" />

//         {/* Title */}
//         <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to QASF</h1>

//         {/* Description */}
//         <p className="text-gray-800 mb-8 text-sm">
//           QASF is a non-profit organization, an innovative establishment, 
//           a home of modern thoughts and development.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col space-y-4">
//           <button className="bg-blue-500 text-white py-3 px-6 rounded-full w-full font-semibold hover:bg-blue-600 transition duration-300">
//             Create Account
//           </button>
//           <button className="bg-green-500 text-white py-3 px-6 rounded-full w-full font-semibold hover:bg-green-600 transition duration-300">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import qasfLogo from '../assets/qasf-logo.svg';

const GetStarted = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-200 to-blue-400">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-8 shadow-2xl max-w-md w-full text-center">
        {/* Logo */}
        <img src={qasfLogo} alt="QASF Logo" className="mx-auto mb-6 w-30" />

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Welcome to QASF</h1>

        {/* Description */}
        <p className="text-gray-800 mb-8 text-sm">
          QASF is a non-profit organization, an innovative establishment, 
          a home of modern thoughts and development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            className="bg-blue-500 text-white py-3 px-6 rounded-full w-full font-semibold hover:bg-blue-600 transition duration-300"
            onClick={() => navigate('/signup')} // Navigate to SignUp page
          >
            Create Account
          </button>
          <button
            className="bg-green-500 text-white py-3 px-6 rounded-full w-full font-semibold hover:bg-green-600 transition duration-300"
            onClick={() => navigate('/login')} // Navigate to Login page
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
