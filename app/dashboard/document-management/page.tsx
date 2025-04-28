"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

type Document = {
  id: string;
  name: string;
  uploadDate: string;
};

export default function DocumentManagementPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // Mock upload (you can later integrate real API)
    const newDocument: Document = {
      id: (documents.length + 1).toString(),
      name: file.name,
      uploadDate: new Date().toLocaleDateString(),
    };

    setDocuments((prev) => [...prev, newDocument]);
    setFile(null);
    alert("File uploaded successfully!");
  };

  const handleDelete = (id: string) => {
    const updatedDocs = documents.filter((doc) => doc.id !== id);
    setDocuments(updatedDocs);
    alert("Document deleted!");
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">Document Upload & Management</h1>

          {/* Upload Section */}
          <div className="bg-white p-6 rounded shadow mb-8">
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4"
            />
            <button
              onClick={handleUpload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Upload
            </button>
          </div>

          {/* Documents List */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Uploaded Documents</h2>
            {documents.length === 0 ? (
              <p className="text-gray-600">No documents uploaded yet.</p>
            ) : (
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Upload Date</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc) => (
                    <tr key={doc.id}>
                      <td className="border p-2">{doc.name}</td>
                      <td className="border p-2">{doc.uploadDate}</td>
                      <td className="border p-2">
                        <button
                          onClick={() => handleDelete(doc.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
