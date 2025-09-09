import React, { useState } from "react";
import axios from "axios";

const ExcelUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("excel", file);

    try {
      setUploading(true);
      const response = await axios.post(
        "http://localhost:1337/api/cars/upload-excel",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(`Successfully imported ${response.data.imported} cars`);
      setFile(null);
      if (onUploadSuccess) onUploadSuccess();
    } catch (error) {
      alert("Upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center gap-4">
        <input
          type="file"
          accept=".xlsx,.xls"
          onChange={(e) => setFile(e.target.files[0])}
          className="block w-full text-sm border rounded p-2"
        />
        <button
          type="submit"
          disabled={!file || uploading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload Cars"}
        </button>
      </div>
    </form>
  );
};

export default ExcelUploader;
