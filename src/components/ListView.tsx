import { useStore } from "../store/useStore";
import { useState } from "react";

const ROW_HEIGHT = 50;
const BUFFER = 5;

export default function ListView() {
  const tasks = useStore((s) => s.tasks);
  const [scrollTop, setScrollTop] = useState(0);

  const height = 500;
  const start = Math.floor(scrollTop / ROW_HEIGHT);
  const end = start + Math.ceil(height / ROW_HEIGHT);

  const from = Math.max(0, start - BUFFER);
  const to = Math.min(tasks.length, end + BUFFER);

  const visible = tasks.slice(from, to);

  return (
    <div
      className="h-[500px] overflow-y-auto border"
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: from * ROW_HEIGHT }} />

      {visible.map((t) => (
        <div
          key={t.id}
          style={{ height: ROW_HEIGHT }}
          className="border-b flex items-center px-2"
        >
          {t.title}
        </div>
      ))}

      <div style={{ height: (tasks.length - to) * ROW_HEIGHT }} />
    </div>
  );
}