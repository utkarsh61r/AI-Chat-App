import {
  Home as HomeIcon,
  Plus,
  Search,
  Bell,
  Grid,
  FileText,
  Cpu,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060a05] text-[#f3f5ee]">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-6 p-4 md:p-6">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-lime-300/10" />
            <div className="font-semibold text-lime-300">AI Chat</div>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-md"
          >
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'block' : 'hidden'} md:block md:col-span-2 rounded-lg bg-black/30 p-4 md:p-4`}>
          <div className="mb-6 hidden md:flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-lime-300/10" />
            <div className="font-semibold text-lime-300">AI Chat</div>
          </div>

          <nav className="space-y-2 text-sm text-[#cbd6c3]">
            <div className="flex items-center gap-3 rounded-md bg-white/3 p-2 font-medium text-lime-300 cursor-pointer hover:bg-white/5 transition">
              <HomeIcon className="h-4 w-4" /> 
              <span>Home</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md cursor-pointer transition"> 
              <Plus className="h-4 w-4" /> 
              <span>New Chat</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md cursor-pointer transition"> 
              <FileText className="h-4 w-4" /> 
              <span>Documents</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md cursor-pointer transition"> 
              <Grid className="h-4 w-4" /> 
              <span>Templates</span>
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md cursor-pointer transition"> 
              <Cpu className="h-4 w-4" /> 
              <span>AI Tools</span>
            </div>
          </nav>

          <div className="mt-6 rounded-md border border-white/6 p-3 text-sm">
            <div className="font-semibold">Upgrade to Pro</div>
            <p className="mt-1 text-xs text-[#9aa39a]">Unlock unlimited chats, AI models & more.</p>
            <button className="mt-3 w-full rounded-md bg-lime-300/90 px-3 py-2 text-black font-medium hover:bg-lime-300 transition">
              Upgrade Now
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-12 md:col-span-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-12">
            <div className="w-full lg:max-w-2xl">
              <div className="inline-block rounded-full bg-white/3 px-3 py-1 text-xs text-lime-300">Your AI Assistant</div>
              <h1 className="mt-6 mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Hello, Alex <span className="wave">👋</span>
                <br /> How can I help you <span className="text-lime-300">today?</span>
              </h1>
              <p className="mb-6 text-sm sm:text-base text-[#9aa39a]">
                AI-powered conversations, smart answers, and creative solutions — all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button className="rounded-full bg-lime-300/95 px-5 py-3 font-semibold text-black hover:bg-lime-300 transition whitespace-nowrap">
                  + New Chat
                </button>
                <button className="rounded-full border border-white/10 px-5 py-3 hover:bg-white/5 transition whitespace-nowrap">
                  Explore Tools
                </button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-lg border border-white/6 p-4 sm:p-5 hover:bg-white/5 transition cursor-pointer"> 
                  <div className="flex items-center gap-3"> 
                    <HomeIcon className="h-5 w-5 text-lime-300 shrink-0"/> 
                    <div className="font-semibold">AI Chat</div>
                  </div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Smart conversations with advanced AI models.</p>
                </div>
                <div className="rounded-lg border border-white/6 p-4 sm:p-5 hover:bg-white/5 transition cursor-pointer"> 
                  <div className="flex items-center gap-3"> 
                    <FileText className="h-5 w-5 text-lime-300 shrink-0"/> 
                    <div className="font-semibold">Documents</div>
                  </div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Upload, analyze and get AI-powered insights.</p>
                </div>
                <div className="rounded-lg border border-white/6 p-4 sm:p-5 hover:bg-white/5 transition cursor-pointer"> 
                  <div className="flex items-center gap-3"> 
                    <Cpu className="h-5 w-5 text-lime-300 shrink-0"/> 
                    <div className="font-semibold">AI Tools</div>
                  </div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Explore powerful tools to boost productivity.</p>
                </div>
                <div className="rounded-lg border border-white/6 p-4 sm:p-5 hover:bg-white/5 transition cursor-pointer"> 
                  <div className="flex items-center gap-3"> 
                    <Grid className="h-5 w-5 text-lime-300 shrink-0"/> 
                    <div className="font-semibold">Templates</div>
                  </div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Ready-to-use templates for every need.</p>
                </div>
              </div>
            </div>

            {/* Orb visual */}
            <div className="hidden lg:flex lg:w-1/3 items-center justify-center shrink-0">
              <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full">
                <div className="absolute -inset-[18px] rounded-full border border-lime-300/10 animate-pulse" />
                <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_35%_30%,#1c2b0f_0%,#070a05_70%)]" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}