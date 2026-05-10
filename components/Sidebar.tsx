"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  BarChart3,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    window.location.href =
      "/login";
  };

  return (
    <div className="w-[260px] min-h-screen bg-zinc-950 border-r border-zinc-800 p-6 flex flex-col">
      <div>
        <h1 className="text-3xl font-bold mb-12">
          AI Bug Analyzer
        </h1>

        <div className="space-y-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition-all rounded-2xl p-4"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>

          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 transition-all rounded-2xl p-4"
          >
            <BarChart3 size={20} />
            Analytics
          </Link>
        </div>
      </div>

      <button
        onClick={logout}
        className="mt-auto flex items-center justify-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-2xl p-4 transition-all"
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}