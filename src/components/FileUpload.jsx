import React, { useState } from "react";
import { dashboardIcons } from "../data-store/store";

const { Upload } = dashboardIcons;
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="file-upload-container">
      <label htmlFor="file-upload-input" className="custom-upload-label">
        <div className="upload-icon">
          <img src={Upload} alt="Upload Icon" />
        </div>
        <div className="upload-text">
          <span>Click to upload or drag and drop a file</span>
          <p>PDF, MS, PNG or JPEG</p>
        </div>
      </label>
      <input
        type="file"
        id="file-upload-input"
        className="file-upload-input"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {selectedFile && (
        <div className="selected-file">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
