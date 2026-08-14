import { MessageSquareText, Plus } from 'lucide-react';

export default function Chats() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Chats</h1>
        <p className="mt-2 text-zinc-400">View and manage all your conversations</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-center">
        <MessageSquareText className="mx-auto h-12 w-12 text-zinc-500" />
        <p className="mt-4 text-zinc-400">No chats yet. Start a new conversation!</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-lime-300 px-4 py-2 font-semibold text-black hover:bg-lime-200">
          <Plus className="h-4 w-4" />
          New Chat
        </button>
      </div>
    </div>
  );
}
