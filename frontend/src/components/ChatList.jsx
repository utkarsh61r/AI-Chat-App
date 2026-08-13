import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";

export default function ChatList({ chats = [] }) {
  return (
    <div className="space-y-6">
      {chats.map((group) => (
        <div key={group.label}>
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">{group.label}</h3>
            <span className="text-[10px] text-zinc-500">{group.items.length}</span>
          </div>

          <div className="space-y-2">
            {group.items.map((chat) => (
              <div
                key={chat.title}
                className={[
                  "group flex w-full items-center justify-between rounded-2xl border px-3 py-3 text-left transition",
                  chat.active
                    ? "border-lime-300/30 bg-lime-300/10 text-lime-100 shadow-[0_0_20px_rgba(163,230,53,0.08)]"
                    : "border-white/8 bg-white/[0.01] text-zinc-200 hover:border-white/15 hover:bg-white/[0.03]",
                ].join(" ")}
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{chat.title}</p>
                  <p className="mt-1 text-[11px] text-zinc-500">{chat.meta}</p>
                </div>

                <div className="ml-3 flex items-center gap-1 opacity-0 transition group-hover:opacity-100">
                  <button type="button" aria-label={`Rename ${chat.title}`} className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/5 hover:text-white">
                    <Pencil className="h-3.5 w-3.5" />
                  </button>
                  <button type="button" aria-label={`Delete ${chat.title}`} className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/5 hover:text-red-300">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                  <button type="button" aria-label={`More actions for ${chat.title}`} className="rounded-lg p-1.5 text-zinc-400 hover:bg-white/5 hover:text-white">
                    <MoreHorizontal className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
