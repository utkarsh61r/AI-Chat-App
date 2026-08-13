import { Sparkles } from "lucide-react";
import { useState } from "react";
import AIOrb from "../components/AIOrb";
import ChatInput from "../components/ChatInput";
import ChatList from "../components/ChatList";
import FeatureCard from "../components/FeatureCard";
import MessageBubble from "../components/MessageBubble";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const featureCards = [
  {
    icon: "✦",
    title: "AI Chat",
    description: "Smart conversations with advanced AI models for focused work and creativity.",
  },
  {
    icon: "▣",
    title: "Documents",
    description: "Turn files, notes, and briefs into structured insights in seconds.",
  },
  {
    icon: "⚡",
    title: "AI Tools",
    description: "Generate ideas, summaries, and action plans without breaking your flow.",
  },
  {
    icon: "⌘",
    title: "Templates",
    description: "Launch polished workflows from a collection of ready-made prompts.",
  },
];

const chatGroups = [
  {
    label: "Today",
    items: [
      { title: "React Hooks", meta: "2m ago", active: true },
      { title: "Building MERN App", meta: "5m ago" },
      { title: "Node.js Authentication", meta: "12m ago" },
    ],
  },
  {
    label: "Yesterday",
    items: [
      { title: "MongoDB Questions", meta: "1d ago" },
      { title: "AI API Integration", meta: "1d ago" },
      { title: "Design System Review", meta: "1d ago" },
    ],
  },
];

const exampleMessages = [
  {
    role: "assistant",
    content: "Hello! I can help you plan, write, and refine anything from product ideas to system prompts.",
    timestamp: "09:41 AM",
  },
  {
    role: "user",
    content: "Explain React hooks in a simple way and give me one practical example.",
    timestamp: "09:42 AM",
  },
  {
    role: "assistant",
    content: "React Hooks let function components use state and lifecycle behavior without turning them into classes.\n\nExample:\n```javascript\nconst [count, setCount] = useState(0);\n```\n\nThis gives you local state, and useEffect can respond to updates or fetch data.",
    timestamp: "09:43 AM",
  },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-[#040806] text-white">
      <div className="flex min-h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex min-h-screen flex-1 flex-col">
          <Navbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} />

          <main className="flex-1 px-4 pb-8 pt-6 sm:px-5 lg:px-8">
            <div className="mx-auto max-w-[1500px]">
              <section className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/8 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-lime-200">
                    <Sparkles className="h-3.5 w-3.5" />
                    Your AI Assistant
                  </div>

                  <h1 className="mt-6 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                    Hello <span className="wave">👋</span>
                    <span className="block text-zinc-100">How can I help you</span>
                    <span className="block text-lime-300">today?</span>
                  </h1>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    Create polished drafts, explore ideas, and turn complex work into simple, actionable output.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      className="rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-200"
                    >
                      + New Chat
                    </button>
                    <button
                      type="button"
                      className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.04]"
                    >
                      Explore Tools
                    </button>
                  </div>
                </div>

                <div className="flex flex-1 justify-center xl:justify-end">
                  <AIOrb />
                </div>
              </section>

              <section className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {featureCards.map((feature) => (
                  <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </section>

              <section className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white">Recent Chats</h2>
                    <button type="button" className="text-sm text-lime-300 hover:text-lime-200">
                      View all
                    </button>
                  </div>
                  <ChatList chats={chatGroups} />
                </div>

                <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-white">Conversation</h2>
                    <button type="button" className="text-sm text-lime-300 hover:text-lime-200">
                      Live
                    </button>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-zinc-950/80 p-4">
                    {exampleMessages.map((messageItem) => (
                      <MessageBubble
                        key={`${messageItem.role}-${messageItem.timestamp}`}
                        role={messageItem.role}
                        content={messageItem.content}
                        timestamp={messageItem.timestamp}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section className="mt-8 rounded-[30px] border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Prompt Studio</h2>
                  <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/8 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-lime-200">
                    Ready
                  </div>
                </div>

                <ChatInput value={message} onChange={setMessage} onSend={handleSend} />
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
