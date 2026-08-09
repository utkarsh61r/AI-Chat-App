import { ArrowUpRight, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, from: "assistant", text: "Hello! How can I help you today?" },
    { id: 2, from: "user", text: "Show me a summary of today's reports." },
  ]);
  const [input, setInput] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { id: Date.now(), from: "user", text: input }]);
    setInput("");
    // simulate assistant reply
    setTimeout(() => {
      setMessages((m) => [...m, { id: Date.now() + 1, from: "assistant", text: "Here is a quick summary..." }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#060a05] text-[#f3f5ee] p-6">
      <div className="mx-auto max-w-5xl rounded-lg bg-white/[0.02] p-4 shadow-lg">
        <header className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-lime-300/10 flex items-center justify-center"> <User className="h-5 w-5 text-lime-300" /> </div>
            <div>
              <div className="font-semibold">AI Assistant</div>
              <div className="text-xs text-[#9aa39a]">Active now</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-md border border-white/6 px-3 py-2">New Chat</button>
            <button className="rounded-md border border-white/6 px-3 py-2">Settings</button>
          </div>
        </header>

        <div className="mb-4 h-[60vh] overflow-auto rounded-md border border-white/6 bg-black/20 p-4">
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${m.from === "user" ? "bg-lime-300 text-black" : "bg-white/[0.03] text-[#e8f0df]"} max-w-[70%] rounded-lg p-3`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={send} className="flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-full border border-white/8 bg-white/[0.02] px-4 py-3 outline-none placeholder:text-[#9aa39a]"
            placeholder="Ask me anything..."
          />
          <button className="flex items-center gap-2 rounded-full bg-lime-300/95 px-4 py-2 font-semibold text-black">
            <Send className="h-4 w-4" /> Send
          </button>
        </form>
      </div>
    </div>
  );
}