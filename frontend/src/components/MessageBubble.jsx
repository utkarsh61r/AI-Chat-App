import { Check, Copy, Sparkles } from "lucide-react";

export default function MessageBubble({ role = "assistant", content = "", timestamp = "09:41 AM" }) {
  const isUser = role === "user";

  return (
    <div className={`mb-5 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`flex max-w-[88%] items-end gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
        <div
          className={[
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold",
            isUser
              ? "border-lime-300/40 bg-lime-300/15 text-lime-200"
              : "border-white/10 bg-zinc-800 text-zinc-200",
          ].join(" ")}
        >
          {isUser ? "U" : <Sparkles className="h-4 w-4" />}
        </div>

        <div
          className={[
            "rounded-[24px] border px-4 py-3 shadow-lg",
            isUser
              ? "border-lime-300/20 bg-lime-300/10 text-zinc-50"
              : "border-white/10 bg-white/[0.02] text-zinc-100",
          ].join(" ")}
        >
          <div className="mb-2 flex items-center justify-between gap-2 text-[10px] uppercase tracking-[0.14em] text-zinc-400">
            <span>{isUser ? "You" : "AI"}</span>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Copy message" className="inline-flex items-center gap-1">
                <Copy className="h-3 w-3" />
              </button>
              <Check className="h-3 w-3 text-lime-300" />
            </div>
          </div>

          <div className="whitespace-pre-wrap break-words text-sm leading-7 text-zinc-100 sm:text-[15px]">
            {content}
          </div>

          {content.includes("```") ? (
            <div className="mt-3 rounded-2xl border border-white/10 bg-zinc-950/70 p-3 text-xs text-zinc-300">
              <pre className="overflow-x-auto whitespace-pre-wrap break-words">{content}</pre>
            </div>
          ) : null}

          <div className="mt-3 text-right text-[10px] text-zinc-400">{timestamp}</div>
        </div>
      </div>
    </div>
  );
}
