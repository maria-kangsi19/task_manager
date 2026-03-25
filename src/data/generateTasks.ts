import { Task } from "../types/task";

const users = ["Maria", "Rishi", "Arwa", "Insia", "Zahra", "Ajab"];

export function generateTasks(count = 500): Task[] {
  return Array.from({ length: count }).map((_, i) => {
    const due = new Date();
    due.setDate(due.getDate() + Math.floor(Math.random() * 20 - 10));

    return {
      id: String(i),
      title: `Task ${i}`,
      status: ["todo", "in_progress", "in_review", "done"][
        Math.floor(Math.random() * 4)
      ] as any,
      priority: ["critical", "high", "medium", "low"][
        Math.floor(Math.random() * 4)
      ] as any,
      assignee: {
        id: "1",
        name: users[Math.floor(Math.random() * users.length)],
        color: "bg-blue-500",
      },
      dueDate: due.toISOString(),
    };
  });
}