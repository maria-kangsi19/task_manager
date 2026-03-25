import { useStore } from "../store/useStore";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const cols = ["todo", "in_progress", "in_review", "done"];

export default function Kanban() {
  const { tasks, updateTaskStatus } = useStore();
  const [dragId, setDragId] = useState<string | null>(null);

  useEffect(() => {
    const up = () => setDragId(null);
    window.addEventListener("pointerup", up);
    return () => window.removeEventListener("pointerup", up);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {cols.map((col) => (
        <div
          key={col}
          className="bg-gray-100 p-2 h-[500px] overflow-y-auto"
          onPointerUp={() => {
            if (dragId) updateTaskStatus(dragId, col as any);
          }}
        >
          {tasks
            .filter((t) => t.status === col)
            .map((t) =>
              t.id === dragId ? (
                <div key={t.id} className="h-16" />
              ) : (
                <div
                  key={t.id}
                  onPointerDown={() => setDragId(t.id)}
                >
                  <TaskCard task={t} />
                </div>
              )
            )}
        </div>
      ))}
    </div>
  );
}