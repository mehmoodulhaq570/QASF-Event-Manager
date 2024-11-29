import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const ReminderManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "Project Meeting 1",
      description: "Discussion about Q4 goals",
      date: "2024-11-18",
      time: "9:00 AM",
      priority: "High",
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Project Meeting 2",
      description: "Discussion about Q4 goals",
      date: "2024-11-19",
      time: "10:00 AM",
      priority: "Medium",
      status: "Completed",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("Add"); // "Add" or "Edit"
  const [currentReminder, setCurrentReminder] = useState({
    id: null,
    title: "",
    description: "",
    date: "",
    time: "",
    priority: "Medium",
    status: "Upcoming",
  });

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const handleModalOpen = (type, reminder = null) => {
    setModalType(type);
    if (type === "Edit" && reminder) {
      setCurrentReminder(reminder);
    } else {
      setCurrentReminder({
        id: null,
        title: "",
        description: "",
        date: "",
        time: "",
        priority: "Medium",
        status: "Upcoming",
      });
    }
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSaveReminder = () => {
    if (modalType === "Add") {
      const newReminder = {
        ...currentReminder,
        id: reminders.length + 1,
      };
      setReminders([...reminders, newReminder]);
    } else if (modalType === "Edit") {
      setReminders(
        reminders.map((r) =>
          r.id === currentReminder.id ? { ...currentReminder } : r
        )
      );
    }
    handleModalClose();
  };

  const handleDeleteReminder = (id) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const filteredReminders = reminders.filter((reminder) => {
    const matchesSearch =
      reminder.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reminder.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === "All") return matchesSearch;
    if (filter === "Today") {
      const today = new Date().toISOString().split("T")[0];
      return matchesSearch && reminder.date === today;
    }
    return matchesSearch && reminder.status === filter;
  });

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  const statusColors = {
    Upcoming: "bg-blue-100 text-blue-600",
    Completed: "bg-green-100 text-green-600",
    Overdue: "bg-red-100 text-red-600",
    Cancelled: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-500">
          Reminder Management
        </h1>
        <button
          onClick={() => handleModalOpen("Add")}
          className="bg-[#00C853] text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          + Add New Reminder
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Total Reminders</h3>
          <p className="text-2xl font-bold text-blue-500">{reminders.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Upcoming</h3>
          <p className="text-2xl font-bold text-blue-500">
            {reminders.filter((r) => r.status === "Upcoming").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Completed</h3>
          <p className="text-2xl font-bold text-blue-500">
            {reminders.filter((r) => r.status === "Completed").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-bold text-gray-600">Overdue</h3>
          <p className="text-2xl font-bold text-blue-500">
            {reminders.filter((r) => r.status === "Overdue").length}
          </p>
        </div>
      </div>

      {/* Search Bar and Filters */}
      <div className="mb-6 flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search reminders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 pl-10 w-80 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>
        <div className="flex space-x-3">
          {["All", "Today", "Upcoming", "Completed", "Overdue"].map(
            (filterType) => (
              <button
                key={filterType}
                onClick={() => handleFilterChange(filterType)}
                className={`px-4 py-2 rounded-lg ${
                  filter === filterType
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filterType}
              </button>
            )
          )}
        </div>
      </div>

      {/* Reminder Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full table-auto">
          <thead className="bg-gray-200 text-gray-600 text-sm uppercase font-medium">
            <tr>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Time</th>
              <th className="py-3 px-6 text-left">Priority</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {filteredReminders.map((reminder) => (
              <tr key={reminder.id} className="border-b">
                <td className="py-3 px-6">{reminder.title}</td>
                <td className="py-3 px-6">{reminder.description}</td>
                <td className="py-3 px-6">{reminder.date}</td>
                <td className="py-3 px-6">{reminder.time}</td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      priorityColors[reminder.priority]
                    }`}
                  >
                    {reminder.priority}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[reminder.status]
                    }`}
                  >
                    {reminder.status}
                  </span>
                </td>
                <td className="py-3 px-6 space-x-2">
                  <button
                    onClick={() => handleModalOpen("Edit", reminder)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteReminder(reminder.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredReminders.length === 0 && (
          <p className="p-4 text-center text-gray-500">No reminders found</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {modalType} Reminder
            </h2>
            <input
              type="text"
              placeholder="Title"
              value={currentReminder.title}
              onChange={(e) =>
                setCurrentReminder({ ...currentReminder, title: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            />
            <textarea
              placeholder="Description"
              value={currentReminder.description}
              onChange={(e) =>
                setCurrentReminder({
                  ...currentReminder,
                  description: e.target.value,
                })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            />
            <input
              type="date"
              value={currentReminder.date}
              onChange={(e) =>
                setCurrentReminder({ ...currentReminder, date: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            />
            <input
              type="time"
              value={currentReminder.time}
              onChange={(e) =>
                setCurrentReminder({ ...currentReminder, time: e.target.value })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            />
            <select
              value={currentReminder.priority}
              onChange={(e) =>
                setCurrentReminder({
                  ...currentReminder,
                  priority: e.target.value,
                })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            >
              {["High", "Medium", "Low"].map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </select>
            <select
              value={currentReminder.status}
              onChange={(e) =>
                setCurrentReminder({
                  ...currentReminder,
                  status: e.target.value,
                })
              }
              className="w-full mb-4 p-2 border rounded-lg"
            >
              {["Upcoming", "Completed", "Overdue", "Cancelled"].map(
                (status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                )
              )}
            </select>
            <div className="flex justify-end">
              <button
                onClick={handleModalClose}
                className="mr-4 px-4 py-2 bg-gray-300 text-gray-600 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveReminder}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReminderManagement;
