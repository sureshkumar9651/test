"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";
import { useAuth } from "@/context/AuthContext";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

const mockUsers: User[] = [
  { id: "1", name: "Admin User", email: "admin@example.com", role: "admin" },
  { id: "2", name: "John Doe", email: "john@example.com", role: "user" },
  { id: "3", name: "Jane Smith", email: "jane@example.com", role: "moderator" },
];

export default function UserManagementPage() {
  const { user } = useAuth();
  const [users, setUsers] = useState<User[]>(mockUsers);

  // Admin-only access control
  if (user?.role !== "admin") {
    return (
      <ProtectedRoute>
        <DashboardLayout>
          <div className="p-10">
            <h1 className="text-2xl font-bold">Access Denied</h1>
            <p className="text-gray-600">Only admins can view this page.</p>
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  const handleRoleChange = (id: string, newRole: string) => {
    const updatedUsers = users.map((u) =>
      u.id === id ? { ...u, role: newRole } : u
    );
    setUsers(updatedUsers);
    alert(`Role updated for user ID ${id} to ${newRole}`);
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">User Management</h1>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Role</th>
                <th className="border p-2">Change Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="border p-2">{u.name}</td>
                  <td className="border p-2">{u.email}</td>
                  <td className="border p-2">{u.role}</td>
                  <td className="border p-2">
                    <select
                      value={u.role}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className="border p-1 rounded"
                    >
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                      <option value="moderator">Moderator</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
