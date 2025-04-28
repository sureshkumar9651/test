import ProtectedRoute from "@/components/ProtectedRoute";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardHome() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-3xl font-bold">Welcome to the Dashboard!</h1>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
