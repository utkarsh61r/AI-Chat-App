import { BriefcaseBusiness, Zap } from 'lucide-react';

export default function Tools() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">AI Tools</h1>
        <p className="mt-2 text-zinc-400">Discover and use powerful AI tools</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
          <Zap className="h-8 w-8 text-lime-300" />
          <h3 className="mt-3 font-semibold text-white">Text Generator</h3>
          <p className="mt-2 text-sm text-zinc-400">Generate creative content with AI</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
          <Zap className="h-8 w-8 text-lime-300" />
          <h3 className="mt-3 font-semibold text-white">Code Assistant</h3>
          <p className="mt-2 text-sm text-zinc-400">Get help with your code</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
          <Zap className="h-8 w-8 text-lime-300" />
          <h3 className="mt-3 font-semibold text-white">Summarizer</h3>
          <p className="mt-2 text-sm text-zinc-400">Summarize long texts quickly</p>
        </div>
      </div>
    </div>
  );
}
