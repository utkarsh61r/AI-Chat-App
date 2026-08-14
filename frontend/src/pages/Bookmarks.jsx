import { Star } from 'lucide-react';

export default function Bookmarks() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Bookmarks</h1>
        <p className="mt-2 text-zinc-400">Your saved conversations and important items</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 text-center">
        <Star className="mx-auto h-12 w-12 text-zinc-500" />
        <p className="mt-4 text-zinc-400">No bookmarks yet. Star your favorite conversations!</p>
      </div>
    </div>
  );
}
