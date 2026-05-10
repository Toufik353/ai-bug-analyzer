export default function DeleteModal({
  onDelete,
}: any) {
  return (
    <button
      onClick={onDelete}
      className="bg-red-500 px-4 py-2 rounded-lg mt-4"
    >
      Delete
    </button>
  );
}