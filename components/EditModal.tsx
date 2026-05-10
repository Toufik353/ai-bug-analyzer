"use client";

import { useState } from "react";

export default function EditModal({
  bug,
  onUpdate,
}: any) {
const [title, setTitle] =
  useState(bug.title);

const [
  description,
  setDescription,
] = useState(bug.description);

const [severity, setSeverity] =
  useState(bug.severity);

  return (
    <div className="mt-4">
      <input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="bg-black p-2 rounded-lg w-full"
      />

      <textarea
  value={description}
  onChange={(e) =>
    setDescription(e.target.value)
  }
  rows={4}
  className="w-full bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
  placeholder="Bug description"
/>

<select
  value={severity}
  onChange={(e) =>
    setSeverity(e.target.value)
  }
  className="w-full bg-black border border-zinc-800 rounded-2xl p-4 outline-none focus:border-blue-500"
>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>

      <button
       onClick={() =>
  onUpdate({
    title,
    description,
    severity,
  })
}
        className="bg-blue-500 px-4 py-2 rounded-lg mt-2"
      >
        Update
      </button>
    </div>
  );
}