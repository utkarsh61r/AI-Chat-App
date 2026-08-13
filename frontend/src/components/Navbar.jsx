import { Bell, ChevronDown, LogOut, Menu, Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar({ onMenuToggle }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050806]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between gap-3 px-4 sm:px-5 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            onClick={onMenuToggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-white transition hover:border-lime-300/40 hover:bg-white/5 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300/15 ring-1 ring-lime-300/40">
              <Sparkles className="h-4 w-4 text-lime-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-lime-300 uppercase">Nova</p>
            </div>
          </div>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <label className="relative block w-full max-w-xl">
            <span className="sr-only">Search</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-2xl border border-white/10 bg-zinc-900/80 py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-zinc-400 transition focus:border-lime-300/60 focus:outline-none focus:ring-2 focus:ring-lime-300/20"
            />
          </label>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-2 text-xs font-semibold text-lime-300 transition hover:bg-lime-300 hover:text-black sm:inline-flex"
          >
            Upgrade
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
          >
            <Bell className="h-4 w-4" />
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-2 py-1.5 pr-3 text-left transition hover:border-white/20 hover:bg-zinc-900"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lime-300 via-lime-200 to-emerald-400 text-xs font-bold text-zinc-950">
                  {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <span className="hidden text-sm font-medium text-white sm:block">{user.name || "User"}</span>
                <ChevronDown className="hidden h-4 w-4 text-zinc-400 sm:block" />
              </button>

              <button
                type="button"
                aria-label="Logout"
                onClick={handleLogout}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-200 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="rounded-full border border-white/10 bg-zinc-950/80 px-3 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-zinc-900"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
