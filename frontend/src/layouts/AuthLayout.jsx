import { Outlet } from "react-router-dom";



function AuthLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export default AuthLayout;