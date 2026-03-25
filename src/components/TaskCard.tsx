import { Task } from "../types/task";

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="bg-white p-2 shadow rounded mb-2">
      <p>{task.title}</p>
      <p className="text-xs">{task.assignee.name}</p>
    </div>
  );
}