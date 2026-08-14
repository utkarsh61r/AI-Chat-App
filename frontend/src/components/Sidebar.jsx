import { useNavigate, useLocation } from "react-router-dom";
import {
  Bot,
  BookOpen,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Home,
  LayoutGrid,
  MessageSquareText,
  Plus,
  Settings,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "New Chat", icon: Plus, path: "/chat" },
  { label: "Chats", icon: MessageSquareText, path: "/chats" },
  { label: "Documents", icon: FileText, path: "/documents" },
  { label: "AI Tools", icon: BriefcaseBusiness, path: "/tools" },
  { label: "History", icon: Clock3, path: "/history" },
  { label: "Bookmarks", icon: Star, path: "/bookmarks" },
  { label: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar({ isOpen = false, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div
        className={[
          "fixed inset-y-0 left-0 z-50 w-[82vw] max-w-[280px] border-r border-white/10 bg-[#090b09]/95 px-4 py-5 shadow-2xl shadow-black/40 backdrop-blur-xl transition-transform duration-300 lg:static lg:z-auto lg:w-[280px] lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        <div className="mb-7 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-lime-300/40 bg-lime-300/10 shadow-[0_0_25px_rgba(163,230,53,0.35)]">
              <Bot className="h-5 w-5 text-lime-300" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">AI Chat</p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close sidebar"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-300 lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="space-y-2">
          {navItems.map(({ label, icon: Icon, path }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={label}
                type="button"
                onClick={() => handleNavigation(path)}
                className={[
                  "flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium transition duration-200",
                  isActive
                    ? "bg-lime-300/12 text-lime-200 ring-1 ring-lime-300/20 shadow-[inset_0_0_18px_rgba(163,230,53,0.08)]"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white",
                ].join(" ")}
              >
                <div className={isActive ? "text-lime-300" : "text-zinc-400"}>
                  <Icon className="h-4 w-4" />
                </div>
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-8 rounded-3xl border border-lime-300/20 bg-gradient-to-br from-lime-300/12 to-white/3 p-4 shadow-[0_0_30px_rgba(163,230,53,0.12)]">
          <div className="flex items-center gap-2 text-lime-300">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Upgrade to Pro</span>
          </div>
          <p className="mt-2 text-sm text-zinc-300">Unlock faster models, unlimited memory, and exclusive tools.</p>
          <button
            type="button"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-300 px-3 py-2.5 text-sm font-semibold text-black transition hover:bg-lime-200"
          >
            Upgrade Now
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/3 px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500 text-xs font-bold text-zinc-950">
              AD
            </div>
            <div>
              <p className="text-sm font-medium text-white">Adele</p>
              <p className="text-xs text-zinc-400">Pro Workspace</p>
            </div>
          </div>
          <User className="h-4 w-4 text-zinc-400" />
        </div>
      </div>

      {isOpen ? (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      ) : null}
    </>
  );
}
