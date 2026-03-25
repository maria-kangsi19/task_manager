import { useStore } from "../store/useStore";

export default function ViewSwitcher() {
  const { view, setView } = useStore();

  return (
    <div className="flex gap-2 mb-4">
      {["kanban", "list", "timeline"].map((v) => (
        <button
          key={v}
          onClick={() => setView(v as any)}
          className={`px-3 py-1 border ${
            view === v ? "bg-black text-white" : ""
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}