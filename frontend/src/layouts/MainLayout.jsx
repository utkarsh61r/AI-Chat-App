import { Outlet } from "react-router-dom";




function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

export default MainLayout;