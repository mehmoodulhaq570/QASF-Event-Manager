// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import GetStarted from './pages/GetStarted';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ParticipantManagement from "./pages/ParticipantManagement";
import SessionManagement from "./pages/SessionManagement";
import SocialMediaUpload from "./pages/SocialMediaManagement";
import ReminderManagement from "./pages/ReminderManagement";
import ProfileManagement from "./pages/ProfileManagement";
import UserPermissions from "./pages/UserPermissionManagement";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Dashboard Layout */}
        <Route path="/" element={<Dashboard />}>
          {/* Child Routes */}
          <Route path="participants" element={<ParticipantManagement />} />
          <Route path="sessions" element={<SessionManagement />} />
          <Route path="upload" element={<SocialMediaUpload />} />
          <Route path="reminders" element={<ReminderManagement />} />
          <Route path="profile" element={<ProfileManagement />} />
          <Route path="permissions" element={<UserPermissions />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GetStarted from './pages/GetStarted';
// import SignUp from './pages/SignUp'; // Import the SignUp component
// import Login from './pages/Login';   // Import the Login component
// import Dashboard from './pages/Dashboard'; // Import the Dashboard component

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<GetStarted />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/Dashboard" element={<Dashboard />}/>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
