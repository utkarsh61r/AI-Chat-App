import {
  Home as HomeIcon,
  Plus,
  Search,
  Bell,
  Grid,
  FileText,
  Cpu,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060a05] text-[#f3f5ee]">
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Sidebar */}
        <aside className="col-span-2 rounded-lg bg-black/30 p-4">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-lime-300/10" />
            <div className="font-semibold text-lime-300">AI Chat</div>
          </div>

          <nav className="space-y-2 text-sm text-[#cbd6c3]">
            <div className="flex items-center gap-3 rounded-md bg-white/3 p-2 font-medium text-lime-300">
              <HomeIcon className="h-4 w-4" /> Home
            </div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md"> <Plus className="h-4 w-4" /> New Chat</div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md"> <FileText className="h-4 w-4" /> Documents</div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md"> <Grid className="h-4 w-4" /> Templates</div>
            <div className="flex items-center gap-3 p-2 hover:bg-white/3 rounded-md"> <Cpu className="h-4 w-4" /> AI Tools</div>
          </nav>

          <div className="mt-6 rounded-md border border-white/6 p-3 text-sm">
            <div className="font-semibold">Upgrade to Pro</div>
            <p className="mt-1 text-xs text-[#9aa39a]">Unlock unlimited chats, AI models & more.</p>
            <button className="mt-3 rounded-md bg-lime-300/90 px-3 py-2 text-black font-medium">Upgrade Now</button>
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-10">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-block rounded-full bg-white/3 px-3 py-1 text-xs text-lime-300">Your AI Assistant</div>
              <h1 className="mt-6 mb-4 text-5xl font-bold leading-tight">
                Hello, Alex <span className="wave">👋</span>
                <br /> How can I help you <span className="text-lime-300">today?</span>
              </h1>
              <p className="mb-6 max-w-xl text-[#9aa39a]">AI-powered conversations, smart answers, and creative solutions — all in one place.</p>

              <div className="flex gap-3">
                <button className="rounded-full bg-lime-300/95 px-5 py-3 font-semibold text-black">+ New Chat</button>
                <button className="rounded-full border border-white/10 px-5 py-3">Explore Tools</button>
              </div>

              <div className="mt-8 grid grid-cols-4 gap-4">
                <div className="rounded-lg border border-white/6 p-5"> 
                  <div className="flex items-center gap-3"> <HomeIcon className="h-5 w-5 text-lime-300"/> <div className="font-semibold">AI Chat</div></div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Smart conversations with advanced AI models.</p>
                </div>
                <div className="rounded-lg border border-white/6 p-5"> 
                  <div className="flex items-center gap-3"> <FileText className="h-5 w-5 text-lime-300"/> <div className="font-semibold">Documents</div></div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Upload, analyze and get AI-powered insights.</p>
                </div>
                <div className="rounded-lg border border-white/6 p-5"> 
                  <div className="flex items-center gap-3"> <Cpu className="h-5 w-5 text-lime-300"/> <div className="font-semibold">AI Tools</div></div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Explore powerful tools to boost productivity.</p>
                </div>
                <div className="rounded-lg border border-white/6 p-5"> 
                  <div className="flex items-center gap-3"> <Grid className="h-5 w-5 text-lime-300"/> <div className="font-semibold">Templates</div></div>
                  <p className="mt-3 text-sm text-[#9aa39a]">Ready-to-use templates for every need.</p>
                </div>
              </div>
            </div>

            {/* Orb visual */}
            <div className="hidden md:flex md:w-1/3 items-center justify-center">
              <div className="relative h-[300px] w-[300px] rounded-full">
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