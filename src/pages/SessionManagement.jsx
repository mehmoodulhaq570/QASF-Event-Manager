import React, { useState } from 'react';

const initialSessions = [
  {
    id: 1,
    name: 'Session 1',
    status: 'Ongoing',
    startTime: '2024-11-18 15:29:20.591',
    duration: '45 minutes',
  },
  {
    id: 2,
    name: 'Session 2',
    status: 'Ongoing',
    startTime: '2024-11-18 15:29:20.604',
    duration: '45 minutes',
  },
  {
    id: 3,
    name: 'Session 3',
    status: 'Ongoing',
    startTime: '2024-11-18 15:29:20.614',
    duration: '45 minutes',
  },
];

const SessionManager = () => {
  const [sessionsList, setSessionsList] = useState(initialSessions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSession, setNewSession] = useState({
    name: '',
    status: 'Ongoing',
    startTime: '',
    duration: '',
  });

  const handleEndSession = (id) => {
    setSessionsList(sessionsList.filter((session) => session.id !== id));
  };

  const handleViewDetails = (id) => {
    console.log(`View details of session ${id}`);
    // Add further logic for viewing details, e.g., redirect to a detail page.
  };

  const handleCreateNewSession = () => {
    setIsModalOpen(true);
  };

  const handleSaveNewSession = () => {
    if (newSession.name && newSession.startTime && newSession.duration) {
      setSessionsList([
        ...sessionsList,
        { ...newSession, id: sessionsList.length + 1 },
      ]);
      setNewSession({
        name: '',
        status: 'Ongoing',
        startTime: '',
        duration: '',
      });
      setIsModalOpen(false);
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-600">Active Sessions</h1>
          <button
            onClick={handleCreateNewSession}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            <span className="mr-2 text-xl">+</span>
            Create New Session
          </button>
        </div>

        {sessionsList.map((session) => (
          <div
            key={session.id}
            className="bg-gray-100 p-4 mb-4 rounded-md shadow-md"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-600">{session.name}</h3>
                <p className="text-sm text-black">{session.status}</p>
                <p className="text-sm text-black">Start Time: {session.startTime}</p>
                <p className="text-sm text-black">Duration: {session.duration}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleViewDetails(session.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleEndSession(session.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
                >
                  End Session
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Modal for creating a new session */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Create New Session</h2>
              <input
                type="text"
                placeholder="Session Name"
                value={newSession.name}
                onChange={(e) =>
                  setNewSession({ ...newSession, name: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <input
                type="datetime-local"
                placeholder="Start Time"
                value={newSession.startTime}
                onChange={(e) =>
                  setNewSession({ ...newSession, startTime: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Duration (e.g., 45 minutes)"
                value={newSession.duration}
                onChange={(e) =>
                  setNewSession({ ...newSession, duration: e.target.value })
                }
                className="w-full mb-4 p-2 border rounded-lg"
              />
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mr-4 px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNewSession}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SessionManager;
