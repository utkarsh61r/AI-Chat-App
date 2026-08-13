import api from "./api";

const mockUser = {
  id: "1",
  name: "Utkarsh",
  email: "upadhyayutkarsh1614@gmail.com",
};

export const login = async (credentials) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!credentials?.email || !credentials?.password) {
    throw new Error("Email and password are required.");
  }

  return {
    ...mockUser,
    email: credentials.email,
  };
};

export const register = async (userData) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: Date.now().toString(),
    name: userData?.name || "New User",
    email: userData?.email || "newuser@example.com",
  };
};

export const logout = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return true;
};

export const getCurrentUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return mockUser;
};

export default {
  login,
  register,
  logout,
  getCurrentUser,
};
