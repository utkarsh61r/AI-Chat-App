import { Settings, Bell, Lock, Eye, LogOut } from 'lucide-react';
import { useClerk } from '@clerk/react';

export default function SettingsPage() {
  const { signOut } = useClerk();

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="mt-2 text-zinc-400">Manage your account preferences and settings</p>
      </div>

      {/* Account Section */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Settings className="h-5 w-5 text-lime-300" />
          Account Settings
        </h2>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-white/[0.02] p-3">
            <span className="text-zinc-300">Email address</span>
            <button className="text-sm text-lime-300 hover:text-lime-200">Edit</button>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white/[0.02] p-3">
            <span className="text-zinc-300">Password</span>
            <button className="text-sm text-lime-300 hover:text-lime-200">Change</button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Bell className="h-5 w-5 text-lime-300" />
          Notifications
        </h2>
        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-3 cursor-pointer rounded-lg bg-white/[0.02] p-3 hover:bg-white/[0.04]">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-lime-300" />
            <span className="text-zinc-300">Email notifications</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer rounded-lg bg-white/[0.02] p-3 hover:bg-white/[0.04]">
            <input type="checkbox" defaultChecked className="w-4 h-4 accent-lime-300" />
            <span className="text-zinc-300">Chat message alerts</span>
          </label>
        </div>
      </div>

      {/* Privacy */}
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Lock className="h-5 w-5 text-lime-300" />
          Privacy & Security
        </h2>
        <div className="mt-4 space-y-3">
          <label className="flex items-center gap-3 cursor-pointer rounded-lg bg-white/[0.02] p-3 hover:bg-white/[0.04]">
            <input type="checkbox" className="w-4 h-4 accent-lime-300" />
            <span className="text-zinc-300">Save chat history</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer rounded-lg bg-white/[0.02] p-3 hover:bg-white/[0.04]">
            <input type="checkbox" className="w-4 h-4 accent-lime-300" />
            <span className="text-zinc-300">Make profile public</span>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-lg border border-red-500/20 bg-red-950/10 p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-red-300">
          <LogOut className="h-5 w-5" />
          Danger Zone
        </h2>
        <div className="mt-4 space-y-3">
          <button
            onClick={() => signOut({ redirectUrl: '/login' })}
            className="w-full rounded-lg border border-red-500/30 bg-red-950/20 px-4 py-2 font-semibold text-red-300 hover:bg-red-950/40 transition"
          >
            Sign Out
          </button>
          <button className="w-full rounded-lg border border-red-500/30 bg-red-950/20 px-4 py-2 font-semibold text-red-300 hover:bg-red-950/40 transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
