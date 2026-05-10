"use client";

import { useState } from "react";

export default function EditBugModal({
  open,
  onClose,
  bug,
  onSave,
}: any) {
  const [title, setTitle] =
    useState(bug.title);

  const [
    description,
    setDescription,
  ] = useState(bug.description);

  const [severity, setSeverity] =
    useState(bug.severity);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            Edit Bug
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5">
          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="Bug title"
            className="w-full bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            rows={5}
            placeholder="Bug description"
            className="w-full bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
          />

          <select
            value={severity}
            onChange={(e) =>
              setSeverity(
                e.target.value
              )
            }
            className="w-full bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 bg-zinc-800 hover:bg-zinc-700 transition-all rounded-2xl py-4"
            >
              Cancel
            </button>

            <button
              onClick={() =>
                onSave({
                  title,
                  description,
                  severity,
                })
              }
              className="flex-1 bg-blue-600 hover:bg-blue-500 transition-all rounded-2xl py-4 font-semibold"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}