import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";


function AppRoutes() {
  return (
    <Routes>
       <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;