import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";
import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/react";

export default function Navbar({ onMenuToggle }) {
  const { user, isLoaded } = useUser();
  const displayName = user?.fullName || user?.firstName || "User";

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

          {!isLoaded ? null : user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/80 px-2 py-1.5 pr-3 text-left transition hover:border-white/20 hover:bg-zinc-900">
                <UserButton afterSignOutUrl="/login" />
                <span className="hidden text-sm font-medium text-white sm:block">{displayName}</span>
                <ChevronDown className="hidden h-4 w-4 text-zinc-400 sm:block" />
              </div>

              <SignOutButton signOutUrl="/login">
                <button
                  type="button"
                  aria-label="Logout"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-zinc-200 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-300"
                >
                  <span className="sr-only">Logout</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <path d="M16 17l5-5-5-5" />
                    <path d="M21 12H9" />
                  </svg>
                </button>
              </SignOutButton>
            </div>
          ) : (
            <SignInButton mode="modal">
              <button
                type="button"
                className="rounded-full border border-white/10 bg-zinc-950/80 px-3 py-2 text-sm font-medium text-white transition hover:border-white/20 hover:bg-zinc-900"
              >
                Login
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
}
