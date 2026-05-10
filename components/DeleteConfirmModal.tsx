"use client";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirmModal({
  open,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">
          Delete Bug
        </h2>

        <p className="text-zinc-400 leading-7 mb-8">
          This action cannot be undone.
          The bug report will be
          permanently removed.
        </p>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-zinc-800 hover:bg-zinc-700 transition-all rounded-2xl py-4"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 hover:bg-red-500 transition-all rounded-2xl py-4 font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}