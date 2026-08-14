import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";
import Chats from "../pages/Chats";
import Documents from "../pages/Documents";
import Tools from "../pages/Tools";
import History from "../pages/History";
import Bookmarks from "../pages/Bookmarks";
import SettingsPage from "../pages/Settings";
import NotFound from "../pages/NotFound";
import ForgotPassword from "../pages/ForgotPassword";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/history" element={<History />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;