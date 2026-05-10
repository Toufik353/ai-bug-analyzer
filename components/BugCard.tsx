"use client";
import EditBugModal from "./EditBugModal";
import { Pencil, Trash2 } from "lucide-react";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { useState } from "react";
import toast from "react-hot-toast";

export default function BugCard({
  bug,
  refresh,
}: any) {
  const [isEditing, setIsEditing] =
    useState(false);

    const [openDelete, setOpenDelete] =
  useState(false);

 const deleteBug = async () => {
  await fetch(`/api/bugs/${bug._id}`, {
    method: "DELETE",
  });

  toast.success("Bug deleted");

  refresh();

  setOpenDelete(false);
};
const updateBug = async (
  updatedData: any
) => {
  await fetch(`/api/bugs/${bug._id}`, {
    method: "PUT",
    headers: {
      "Content-Type":
        "application/json",
    },
    body: JSON.stringify(
      updatedData
    ),
  });

  toast.success("Bug updated");

  refresh();

  setIsEditing(false);
};

  return (
  <div className="group bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-3xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 relative overflow-hidden">
    
    {/* Glow */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

    {/* Header */}
    <div className="flex items-start justify-between mb-6 relative z-10">
      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-3">
            Bug Report
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">
            {bug.title}
          </h2>
        </div>

        <p className="text-zinc-400 leading-8 text-[15px] max-w-xl">
          {bug.description}
        </p>
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={() =>
            setIsEditing(true)
          }
          className="bg-zinc-800 hover:bg-zinc-700 transition-all p-3 rounded-2xl"
        >
          <Pencil size={18} />
        </button>

        <button
          onClick={() =>
            setOpenDelete(true)
          }
          className="bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-all p-3 rounded-2xl"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>

    {/* AI Summary */}
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-5 mb-6 relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-blue-500" />

        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          AI Analysis Summary
        </p>
      </div>

      <p className="text-zinc-300 leading-7 text-sm">
        {bug.summary}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-3 mb-6 relative z-10">
      <span
        className={`px-4 py-2 rounded-full text-sm font-semibold border
        ${
          bug.severity === "High"
            ? "bg-red-500/10 text-red-400 border-red-500/20"
            : bug.severity ===
              "Medium"
            ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
            : "bg-green-500/10 text-green-400 border-green-500/20"
        }`}
      >
        {bug.severity} Priority
      </span>

      <span
        className={`px-4 py-2 rounded-full text-sm font-semibold border
        ${
          bug.category ===
          "Backend"
            ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
            : bug.category ===
              "UI"
            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
            : bug.category ===
              "API"
            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
            : "bg-pink-500/10 text-pink-400 border-pink-500/20"
        }`}
      >
        {bug.category}
      </span>
    </div>

    {/* Suggested Fix */}
    <div className="relative z-10">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500 mb-3">
        Suggested Fix
      </p>

      <p className="text-zinc-200 leading-8 text-[15px]">
        {bug.suggestedFix}
      </p>
    </div>

    {/* Edit Modal */}
    <EditBugModal
      open={isEditing}
      onClose={() =>
        setIsEditing(false)
      }
      bug={bug}
      onSave={updateBug}
    />

    {/* Delete Modal */}
    <DeleteConfirmModal
      open={openDelete}
      onClose={() =>
        setOpenDelete(false)
      }
      onConfirm={deleteBug}
    />
  </div>
  );
}