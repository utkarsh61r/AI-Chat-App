import { Clock3, Trash2 } from 'lucide-react';

export default function History() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">History</h1>
          <p className="mt-2 text-zinc-400">View your recent conversations and activities</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/20 px-4 py-2 text-sm font-semibold text-red-300 hover:bg-red-950/40">
          <Trash2 className="h-4 w-4" />
          Clear History
        </button>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-center">
        <Clock3 className="mx-auto h-12 w-12 text-zinc-500" />
        <p className="mt-4 text-zinc-400">No history yet. Start a new chat to create history!</p>
      </div>
    </div>
  );
}
