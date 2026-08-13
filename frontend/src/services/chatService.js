const mockChats = [
  {
    id: "1",
    title: "React Hooks",
    updatedAt: "2m ago",
  },
  {
    id: "2",
    title: "Building MERN App",
    updatedAt: "15m ago",
  },
  {
    id: "3",
    title: "Node.js Authentication",
    updatedAt: "1h ago",
  },
];

const mockMessages = {
  1: [
    { id: "m1", role: "assistant", content: "React hooks let functional components manage state and effects." },
    { id: "m2", role: "user", content: "Explain useEffect with one example." },
  ],
  2: [
    { id: "m3", role: "assistant", content: "We can structure a MERN stack app with a clean API layer and UI." },
  ],
  3: [
    { id: "m4", role: "assistant", content: "Authentication can be implemented with session-based or JWT-based patterns." },
  ],
};

export const getChats = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockChats;
};

export const getMessages = async (chatId) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockMessages[chatId] || [];
};

export const createChat = async (title) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    id: Date.now().toString(),
    title: title || "New Chat",
    updatedAt: "just now",
  };
};

export const sendMessage = async (chatId, message) => {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return {
    id: Date.now().toString(),
    chatId,
    role: "assistant",
    content: `Mock reply for: ${message}`,
  };
};

export const deleteChat = async (chatId) => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return { success: true, chatId };
};

export default {
  getChats,
  getMessages,
  createChat,
  sendMessage,
  deleteChat,
};
