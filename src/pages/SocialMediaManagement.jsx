import React, { useState } from "react";

const SocialMediaManagement = () => {
  const [fileType, setFileType] = useState("Images");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [recentUploads, setRecentUploads] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUploads = files.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setRecentUploads((prev) => [...prev, ...newUploads]);

    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);
      if (progress === 100) {
        clearInterval(interval);
      }
    }, 100); // Simulates progress every 100ms
  };

  const handleFileTypeChange = (type) => {
    setFileType(type);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}

        {/* Content */}
        <div className="flex-1 p-6">
          <h2 className="text-3xl font-semibold text-teal-600 mb-4">
            Upload Your Media
          </h2>

          {/* Upload Box */}
          <div className="border-2 border-dashed border-teal-500 p-6 rounded-lg bg-white">
            <div className="text-center">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="fileUpload"
              />
              <label
                htmlFor="fileUpload"
                className="cursor-pointer flex flex-col items-center"
              >
                <div className="text-teal-500 text-5xl mb-2">&#8679;</div>
                <p className="text-lg text-gray-700">
                  Drag & Drop Files Here <br />
                  or click to browse
                </p>
              </label>
            </div>
          </div>

          {/* File Type Selection */}
          <div className="mt-6 flex space-x-4">
            {["Images", "Videos", "Documents"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-lg ${
                  fileType === type
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handleFileTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Upload Progress */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700">
              Upload Progress
            </h3>
            <div className="w-full bg-gray-200 rounded-lg h-4 mt-2">
              <div
                className="bg-teal-500 h-4 rounded-lg"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {uploadProgress}% Complete
            </p>
          </div>

          {/* Upload Guidelines */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 flex items-center">
              <i className="fas fa-info-circle text-teal-500 mr-2"></i>
              Upload Guidelines
            </h3>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Supported Formats: JPG, PNG, MP4, PDF</li>
              <li>Maximum file size: 100MB</li>
              <li>Recommended resolution: 1920x1080 or higher</li>
            </ul>
          </div>

          {/* Start Upload Button */}
          <div className="mt-6">
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600">
              Start Upload
            </button>
          </div>

          {/* Recent Uploads */}
          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-700">Recent Uploads</h3>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {recentUploads.map((upload, index) => (
                <div key={index} className="border p-2 rounded-lg">
                  <img
                    src={upload.url}
                    alt={upload.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-1">{upload.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaManagement;
