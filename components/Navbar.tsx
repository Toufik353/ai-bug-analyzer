"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-5 border-b border-zinc-800">
      <h1 className="text-2xl font-bold">
        AI Bug Analyzer
      </h1>

      <div className="flex gap-5">
        <Link href="/dashboard">Dashboard</Link>

        <Link href="/dashboard/analytics">
          Analytics
        </Link>
      </div>
    </div>
  );
}