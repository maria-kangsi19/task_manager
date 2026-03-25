import { create } from "zustand";
import { Task, Status } from "../types/task";

interface Store {
  tasks: Task[];
  setTasks: (t: Task[]) => void;
  updateTaskStatus: (id: string, status: Status) => void;

  view: "kanban" | "list" | "timeline";
  setView: (v: Store["view"]) => void;
}

export const useStore = create<Store>((set) => ({
  tasks: [],
  setTasks: (t) => set({ tasks: t }),

  updateTaskStatus: (id, status) =>
    set((s) => ({
      tasks: s.tasks.map((t) =>
        t.id === id ? { ...t, status } : t
      ),
    })),

  view: "kanban",
  setView: (v) => set({ view: v }),
}));