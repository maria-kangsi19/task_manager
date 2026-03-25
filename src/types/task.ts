export type Status = "todo" | "in_progress" | "in_review" | "done";
export type Priority = "critical" | "high" | "medium" | "low";

export interface User {
  id: string;
  name: string;
  color: string;
}

export interface Task {
  id: string;
  title: string;
  status: Status;
  priority: Priority;
  assignee: User;
  startDate?: string;
  dueDate: string;
}