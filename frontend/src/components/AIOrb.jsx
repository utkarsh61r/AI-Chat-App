export default function AIOrb() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-72 w-72 rounded-full border border-lime-300/10 bg-lime-300/5 blur-3xl md:h-80 md:w-80" />

      <div className="relative h-52 w-52 animate-[float_6s_ease-in-out_infinite] sm:h-60 sm:w-60 lg:h-72 lg:w-72">
        <div className="absolute inset-0 rounded-full border border-lime-300/20" />
        <div className="absolute inset-3 rounded-full border border-lime-300/15" />
        <div className="absolute -inset-6 rounded-full border border-lime-300/10" />

        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(202,255,94,0.9),rgba(124,154,49,0.25)_26%,rgba(3,7,4,0.96)_60%,rgba(3,7,4,1)_100%)] shadow-[0_0_50px_rgba(163,230,53,0.4)]" />

        <div className="absolute inset-[18%] rounded-full border border-lime-300/20 bg-[#070b08] shadow-[inset_0_0_35px_rgba(163,230,53,0.1)]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-lime-300/30 bg-lime-300/10 text-xl font-bold text-lime-200 shadow-[0_0_20px_rgba(163,230,53,0.4)] sm:h-20 sm:w-20">
            ✦
          </div>
        </div>

        <div className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-lime-300/30 bg-zinc-950/80 text-sm text-lime-200 shadow-[0_0_16px_rgba(163,230,53,0.2)]">
          ✨
        </div>
        <div className="absolute -right-2 top-10 flex h-9 w-9 items-center justify-center rounded-full border border-lime-300/30 bg-zinc-950/80 text-xs text-lime-200">
          💬
        </div>
        <div className="absolute bottom-2 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-lime-300/30 bg-zinc-950/80 text-xs text-lime-200">
          ⚡
        </div>
      </div>
    </div>
  );
}
