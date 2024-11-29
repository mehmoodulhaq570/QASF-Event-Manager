import React, { useState } from "react";

const initialParticipants = [
  { id: 1, name: "Participant 1", email: "participant1@example.com" },
  { id: 2, name: "Participant 2", email: "participant2@example.com" },
  { id: 3, name: "Participant 3", email: "participant3@example.com" },
  { id: 4, name: "Participant 4", email: "participant4@example.com" },
  { id: 5, name: "Participant 5", email: "participant5@example.com" },
  { id: 6, name: "Participant 6", email: "participant6@example.com" },
];

const ParticipantManagement = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editParticipant, setEditParticipant] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Open Modal for Adding or Editing
  const openModal = (participant = null) => {
    setEditParticipant(participant);
    setFormData(participant || { name: "", email: "" });
    setShowModal(true);
  };

  // Close Modal
  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "" });
  };

  // Handle Form Submit
  const handleFormSubmit = () => {
    if (editParticipant) {
      // Update participant
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === editParticipant.id ? { ...editParticipant, ...formData } : p
        )
      );
    } else {
      // Add new participant
      const newParticipant = {
        id: participants.length + 1, // Assign next sequential ID
        ...formData,
      };
      setParticipants((prev) => [...prev, newParticipant]);
    }
    closeModal();
  };

  // Handle Delete and Reassign IDs
  const handleDelete = (id) => {
    setParticipants((prev) =>
      prev
        .filter((participant) => participant.id !== id) // Remove the participant
        .map((participant, index) => ({
          ...participant,
          id: index + 1, // Reassign IDs sequentially
        }))
    );
  };

  // Filter Participants by Search Query
  const filteredParticipants = participants.filter((participant) =>
    participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="mb-6 text-center flex justify-center items-center">
        <div className="relative w-1/2">
          <span className="absolute left-3 top-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search Participants"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Participant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParticipants.map((participant) => (
          <div
            key={participant.id}
            className="bg-white rounded-lg shadow-md p-4 relative"
          >
            {/* Participant Number */}
            <div className="absolute top-[-10px] left-[-10px] bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {participant.id}
            </div>

            {/* Participant Info */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-600">
                {participant.name}
              </h3>
              <p className="text-sm text-gray-600">Email: {participant.email}</p>
            </div>

            {/* Participant Actions */}
            <div className="flex space-x-2">
              <button
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                onClick={() => openModal(participant)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => handleDelete(participant.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-green-600"
        onClick={() => openModal()}
      >
        +
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
            <h2 className="text-xl font-bold mb-4">
              {editParticipant ? "Edit Participant" : "Add Participant"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmit();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantManagement;
