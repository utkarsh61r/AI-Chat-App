import { Link } from "react-router-dom";
import { AlertTriangle, Home, MessageSquare } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#060a05] px-6 py-12 text-[#f3f5ee]">
      <div className="w-full max-w-5xl rounded-2xl border border-white/10 bg-black/30 p-8 shadow-2xl shadow-lime-300/10 backdrop-blur-xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex rounded-full border border-lime-300/20 bg-lime-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
              404 Error
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              This page seems to have wandered off.
            </h1>
            <p className="mt-4 max-w-xl text-base text-[#9aa39a] sm:text-lg">
              The route you requested doesn’t exist, but you can still jump back into your AI conversation or head home.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-lime-300/95 px-5 py-3 font-semibold text-black transition hover:bg-lime-300"
              >
                <Home className="h-4 w-4" />
                Back Home
              </Link>
              <Link
                to="/chat"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-semibold text-[#f3f5ee] transition hover:bg-white/5"
              >
                <MessageSquare className="h-4 w-4" />
                Open Chat
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative h-65 w-65 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full border border-lime-300/10 animate-pulse" />
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle_at_35%_30%,#1c2b0f_0%,#070a05_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full border border-lime-300/20 bg-black/70 p-8 shadow-lg shadow-lime-300/10">
                  <AlertTriangle className="h-14 w-14 text-lime-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;