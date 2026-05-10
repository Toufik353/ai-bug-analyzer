"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import BugCard from "@/components/BugCard";
import EmptyState from "@/components/EmptyState";
import toast from "react-hot-toast";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");

  const [bugs, setBugs] = useState([]);

  const [search, setSearch] =
    useState("");

  const [filter, setFilter] =
    useState("All");

  const fetchBugs = async () => {
    const res = await fetch("/api/bugs");

    const data = await res.json();

    setBugs(data);
  };

  const filteredBugs = bugs.filter(
    (bug: any) => {
      const matchesSearch =
        bug.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        filter === "All"
          ? true
          : bug.severity === filter;

      return (
        matchesSearch &&
        matchesFilter
      );
    }
  );

  useEffect(() => {
    fetchBugs();
  }, []);

  const handleAnalyze = async () => {
    if (!title || !description) {
      toast.error("Fill all fields");

      return;
    }

    try {
      const aiRes = await fetch(
        "/api/ai/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            description,
          }),
        }
      );

      const aiData = await aiRes.json();

      await fetch("/api/bugs", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          ...aiData,
        }),
      });

      toast.success(
        "Bug analyzed successfully"
      );

      setTitle("");
      setDescription("");

      fetchBugs();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-zinc-500 mb-2">
              AI Powered Platform
            </p>

            <h1 className="text-5xl font-bold">
              Bug Intelligence Dashboard
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-400">
                Total Bugs
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {bugs.length}
              </h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-400">
                AI Analysis
              </p>

              <h2 className="text-4xl font-bold mt-2">
                Active
              </h2>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <p className="text-zinc-400">
                System Status
              </p>

              <h2 className="text-4xl font-bold mt-2 text-green-400">
                Healthy
              </h2>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-10">
            <div className="grid gap-5">
              <input
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Bug title"
                className="bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
              />

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                placeholder="Describe your bug..."
                rows={5}
                className="bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
              />

              <button
                onClick={handleAnalyze}
                className="bg-blue-600 hover:bg-blue-500 transition-all rounded-2xl px-6 py-4 font-semibold w-fit"
              >
                Analyze Bug
              </button>
            </div>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search bugs..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
            />

            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 outline-none"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Bugs */}
          {bugs.length === 0 ? (
            <EmptyState />
          ) : filteredBugs.length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center">
              <h2 className="text-3xl font-bold mb-4">
                No Bugs Found
              </h2>

              <p className="text-zinc-500">
                Try creating or searching for
                another bug report.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBugs.map(
                (bug: any) => (
                  <BugCard
                    key={bug._id}
                    bug={bug}
                    refresh={fetchBugs}
                  />
                )
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}