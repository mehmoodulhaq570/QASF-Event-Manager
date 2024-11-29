import React, { useState } from "react";
import { 
  FaTachometerAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaUpload,
  FaBell,
  FaUser,
  FaLock,
  FaCalendar,
  FaPlus,
  FaCommentDots,
  FaCloudUploadAlt,
} from "react-icons/fa";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sessions, setSessions] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Function to add a new session with details
  const handleCreateSession = () => {
    const newSession = {
      name: `Session ${sessions.length + 1}`,
      date: new Date().toLocaleString(),
      status: "Conducted",
    };
    setSessions([...sessions, newSession]);
  };

  // Check if the current route is the Dashboard route
  const isDashboardRoute = location.pathname === "/";

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gradient-to-b from-teal-600 to-teal-400 text-white">
        <div className="p-6 flex flex-col items-center">
          {/* Calendar Icon with Blue Border and White Circle */}
          <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
            <FaCalendar className="text-blue-500 text-3xl" />
          </div>
          {/* Sidebar Title */}
          <div className="text-xl font-bold">Event Manager</div>
        </div>
        <ul className="space-y-4 px-4">
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/" className="flex items-center">
              <FaTachometerAlt className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/participants" className="flex items-center">
              <FaUsers className="mr-2" /> Participant Management
            </Link>
          </li>
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/sessions" className="flex items-center">
              <FaChalkboardTeacher className="mr-2" /> Session Management
            </Link>
          </li>
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/upload" className="flex items-center">
              <FaUpload className="mr-2" /> Social Media Upload
            </Link>
          </li>
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/reminders" className="flex items-center">
              <FaBell className="mr-2" /> Reminder Management
            </Link>
          </li>
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/profile" className="flex items-center">
              <FaUser className="mr-2" /> Profile Management
            </Link>
          </li>
          <li className="flex items-center hover:bg-teal-500 rounded px-4 py-2 cursor-pointer">
            <Link to="/permissions" className="flex items-center">
              <FaLock className="mr-2" /> User Permission Management
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {isDashboardRoute && (
          <>
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white shadow rounded p-4 text-center">
                <div className="text-2xl font-bold">{sessions.length}</div>
                <div className="text-gray-600">Total Sessions</div>
              </div>
              <div className="bg-white shadow rounded p-4 text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-gray-600">Total Participants</div>
              </div>
              <div className="bg-white shadow rounded p-4 text-center">
                <div className="text-2xl font-bold">0</div>
                <div className="text-gray-600">Feedback Collected</div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="mt-6 bg-white shadow rounded p-4">
              <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
              <ul>
                {sessions.map((session, index) => (
                  <li
                    key={index}
                    className="flex justify-between py-2 border-b last:border-b-0"
                  >
                    <span>{session.name}</span>
                    <span className="text-sm text-gray-500">
                      {session.date} - {session.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white shadow rounded p-4">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded py-3"
                  onClick={handleCreateSession}
                >
                  <FaPlus /> Create New Session
                </button>
                <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded py-3">
                  <FaCommentDots /> View Feedback
                </button>
                <button
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded py-3"
                  onClick={() => navigate("/upload")}
                >
                  <FaCloudUploadAlt /> Upload Media
                </button>
              </div>
            </div>
          </>
        )}
        {!isDashboardRoute && <Outlet />}
      </main>
    </div>
  );
};

export default Dashboard;
