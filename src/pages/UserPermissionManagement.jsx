// ManagePermissions.js
import React, { useState } from "react";
import { FaPen, FaTrash, FaSearch } from "react-icons/fa";

const ManagePermissions = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: "Admin",
      description: "Full system access with all privileges",
      permissions: { read: true, write: true, delete: true },
    },
    {
      id: 2,
      name: "Manager",
      description: "Can manage team and content",
      permissions: { read: true, write: true, delete: false },
    },
    {
      id: 3,
      name: "Trainer",
      description: "Can edit and publish content",
      permissions: { read: true, write: false, delete: false },
    },
    {
      id: 4,
      name: "User",
      description: "Basic access rights",
      permissions: { read: true, write: false, delete: false },
    },
  ]);

  const [newRole, setNewRole] = useState({
    id: null,
    name: "",
    description: "",
    permissions: { read: false, write: false, delete: false },
  });
  const [isAdding, setIsAdding] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Permission toggle
  const handleTogglePermission = (id, permission) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) =>
        role.id === id
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permission]: !role.permissions[permission],
              },
            }
          : role
      )
    );
  };

  // Handle Delete Role
  const handleDeleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  // Handle Edit Role
  const handleEditRole = (role) => {
    setNewRole(role);
    setIsAdding(true);
  };

  // Handle Add/Save Role
  const handleAddOrSaveRole = () => {
    if (newRole.id) {
      // Save Changes
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === newRole.id ? { ...role, ...newRole } : role
        )
      );
    } else {
      // Add New Role
      setRoles((prevRoles) => [
        ...prevRoles,
        { id: roles.length + 1, ...newRole },
      ]);
    }

    // Reset and Close Modal
    setNewRole({ id: null, name: "", description: "", permissions: { read: false, write: false, delete: false } });
    setIsAdding(false);
  };

  // Filter roles based on search query
  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen py-8">
      {/* Header */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-blue-700">Manage Permissions</h1>
        <p className="text-gray-600 mt-2">Total Roles: {filteredRoles.length}</p>
      </div>

      {/* Search & Add New Role */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-2/3">
        <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search roles..."
            className="w-full focus:outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
        >
          + Add New Role
        </button>
      </div>

      {/* Add/Edit Role Modal */}
      {isAdding && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">{newRole.id ? "Edit Role" : "Add New Role"}</h2>
            <input
              type="text"
              placeholder="Role Name"
              value={newRole.name}
              onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <textarea
              placeholder="Role Description"
              value={newRole.description}
              onChange={(e) =>
                setNewRole({ ...newRole, description: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div className="flex space-x-4">
              <button
                onClick={() =>
                  setNewRole({
                    ...newRole,
                    permissions: { ...newRole.permissions, read: !newRole.permissions.read },
                  })
                }
                className={`px-6 py-2 rounded-lg ${
                  newRole.permissions.read
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                Read
              </button>
              <button
                onClick={() =>
                  setNewRole({
                    ...newRole,
                    permissions: { ...newRole.permissions, write: !newRole.permissions.write },
                  })
                }
                className={`px-6 py-2 rounded-lg ${
                  newRole.permissions.write
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                Write
              </button>
              <button
                onClick={() =>
                  setNewRole({
                    ...newRole,
                    permissions: { ...newRole.permissions, delete: !newRole.permissions.delete },
                  })
                }
                className={`px-6 py-2 rounded-lg ${
                  newRole.permissions.delete
                    ? "bg-green-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                Delete
              </button>
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                onClick={() => setIsAdding(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrSaveRole}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                {newRole.id ? "Save Changes" : "Add Role"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Roles Table */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-4 overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left text-gray-700 border-b">
              <th className="p-3">Role Name</th>
              <th className="p-3">Description</th>
              <th className="p-3">Read</th>
              <th className="p-3">Write</th>
              <th className="p-3">Delete</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRoles.map((role) => (
              <tr key={role.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{role.name}</td>
                <td className="p-3">{role.description}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleTogglePermission(role.id, "read")}
                    className={`px-6 py-2 rounded-lg ${
                      role.permissions.read
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {role.permissions.read ? "Enabled" : "Disabled"}
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleTogglePermission(role.id, "write")}
                    className={`px-6 py-2 rounded-lg ${
                      role.permissions.write
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {role.permissions.write ? "Enabled" : "Disabled"}
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleTogglePermission(role.id, "delete")}
                    className={`px-6 py-2 rounded-lg ${
                      role.permissions.delete
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {role.permissions.delete ? "Enabled" : "Disabled"}
                  </button>
                </td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => handleEditRole(role)}
                    className="text-blue-500"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDeleteRole(role.id)}
                    className="text-red-500"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button
          onClick={() => alert("Changes discarded")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg transition-all"
        >
          Cancel
        </button>
        <button
          onClick={() => alert("Changes saved")}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ManagePermissions;
