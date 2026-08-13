export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/[0.02] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-lime-300/30 hover:bg-white/[0.04] hover:shadow-[0_0_25px_rgba(163,230,53,0.12)]">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-lime-300/40 bg-lime-300/10 text-lg text-lime-300 shadow-[0_0_25px_rgba(163,230,53,0.12)]">
          {icon}
        </div>
        <button
          type="button"
          aria-label={`Open ${title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-zinc-950/60 text-zinc-300 transition group-hover:border-lime-300/30 group-hover:text-lime-300"
        >
          →
        </button>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
      </div>
    </article>
  );
}
