import { useUser } from "@clerk/react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#040806] text-sm text-zinc-300">
        Loading session...
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
