"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

type Ingestion = {
  id: string;
  documentName: string;
  status: "Pending" | "In Progress" | "Completed" | "Failed";
  startTime: string;
};

export default function IngestionManagementPage() {
  const [ingestions, setIngestions] = useState<Ingestion[]>([]);

  const handleTriggerIngestion = () => {
    const newIngestion: Ingestion = {
      id: (ingestions.length + 1).toString(),
      documentName: `Document-${ingestions.length + 1}.pdf`,
      status: "In Progress",
      startTime: new Date().toLocaleTimeString(),
    };

    setIngestions((prev) => [...prev, newIngestion]);

    // Mock status change after few seconds
    setTimeout(() => {
      setIngestions((prev) =>
        prev.map((ing) =>
          ing.id === newIngestion.id ? { ...ing, status: "Completed" } : ing
        )
      );
    }, 5000); // 5 seconds
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">Ingestion Management</h1>

          {/* Trigger Ingestion */}
          <div className="bg-white p-6 rounded shadow mb-8">
            <button
              onClick={handleTriggerIngestion}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Trigger Ingestion
            </button>
          </div>

          {/* Ingestion Status */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Ingestion Status</h2>
            {ingestions.length === 0 ? (
              <p className="text-gray-600">No ingestion triggered yet.</p>
            ) : (
              <table className="w-full border">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Document</th>
                    <th className="border p-2">Start Time</th>
                    <th className="border p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {ingestions.map((ing) => (
                    <tr key={ing.id}>
                      <td className="border p-2">{ing.documentName}</td>
                      <td className="border p-2">{ing.startTime}</td>
                      <td className="border p-2">
                        <span
                          className={`px-2 py-1 rounded text-white ${
                            ing.status === "Completed"
                              ? "bg-green-600"
                              : ing.status === "In Progress"
                              ? "bg-yellow-500"
                              : ing.status === "Failed"
                              ? "bg-red-600"
                              : "bg-gray-500"
                          }`}
                        >
                          {ing.status}
                        </span>
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
