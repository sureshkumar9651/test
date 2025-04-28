"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/user-management", label: "User Management" },
  { href: "/dashboard/document-management", label: "Document Management" },
  { href: "/dashboard/ingestion-management", label: "Ingestion Management" },
  { href: "/dashboard/qa-interface", label: "Q&A Interface" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">{link.label}</div>
          </Link>
        ))}
        <button
          onClick={logout}
          className="mt-10 bg-red-500 hover:bg-red-600 px-4 py-2 rounded w-full"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 bg-gray-50 p-8">{children}</main>
    </div>
  );
}
