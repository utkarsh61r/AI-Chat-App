import { Mic, Paperclip, Send } from "lucide-react";

export default function ChatInput({ value, onChange, onSend, disabled = false }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend?.();
    }
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-zinc-950/80 p-2 shadow-[0_0_30px_rgba(163,230,53,0.08)] backdrop-blur-md transition focus-within:border-lime-300/50 focus-within:shadow-[0_0_30px_rgba(163,230,53,0.12)]">
      <div className="flex items-end gap-2 sm:gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-lime-300/30 bg-lime-300/10 text-lime-300">
          ✦
        </div>

        <textarea
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={disabled}
          placeholder="Ask me anything..."
          aria-label="Chat prompt"
          className="max-h-32 min-h-[52px] flex-1 resize-none overflow-y-auto bg-transparent px-1 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
        />

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            aria-label="Attach file"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
          >
            <Paperclip className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Voice input"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-zinc-200 transition hover:border-white/20 hover:bg-white/5"
          >
            <Mic className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={onSend}
            aria-label="Send prompt"
            disabled={disabled || !value?.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-300 text-black transition hover:bg-lime-200 disabled:cursor-not-allowed disabled:bg-lime-300/40 disabled:text-black/60"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
