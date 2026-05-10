"use client";

import { useEffect, useState } from "react";

import AnalyticsChart from "@/components/AnalyticsChart";

import Link from "next/link";

export default function Analytics() {
  const [data, setData] =
    useState<any[]>([]);

  const [totalBugs, setTotalBugs] =
    useState(0);

  useEffect(() => {
    fetch("/api/bugs")
      .then((res) => res.json())
      .then((bugs) => {
        setTotalBugs(bugs.length);

        const counts = {
          High: 0,
          Medium: 0,
          Low: 0,
        };

        bugs.forEach((bug: any) => {
          if (
            counts[
              bug.severity as keyof typeof counts
            ] !== undefined
          ) {
            counts[
              bug.severity as keyof typeof counts
            ]++;
          }
        });

        setData([
          {
            name: "High",
            value: counts.High,
          },
          {
            name: "Medium",
            value: counts.Medium,
          },
          {
            name: "Low",
            value: counts.Low,
          },
        ]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-zinc-500 mb-2">
              AI Analytics
            </p>

            <h1 className="text-5xl font-bold">
              Bug Insights
            </h1>
          </div>

          <Link
            href="/dashboard"
            className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-all rounded-2xl px-6 py-4"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500">
              Total Bugs
            </p>

            <h2 className="text-5xl font-bold mt-3">
              {totalBugs}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500">
              High Severity
            </p>

            <h2 className="text-5xl font-bold mt-3 text-red-400">
              {
                data.find(
                  (d) =>
                    d.name === "High"
                )?.value
              }
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-500">
              System Health
            </p>

            <h2 className="text-5xl font-bold mt-3 text-green-400">
              Stable
            </h2>
          </div>
        </div>

        {/* Charts */}
        <AnalyticsChart data={data} />
      </div>
    </div>
  );
}