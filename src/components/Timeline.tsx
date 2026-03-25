import { useStore } from "../store/useStore";

export default function Timeline() {
  const tasks = useStore((s) => s.tasks);

  return (
    <div className="overflow-x-auto">
      {tasks.slice(0, 20).map((t) => (
        <div key={t.id} className="flex mb-2">
          <div className="w-40">{t.title}</div>
          <div className="flex-1 h-4 bg-blue-400" />
        </div>
      ))}
    </div>
  );
}