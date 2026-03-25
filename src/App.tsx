import { useEffect } from "react";
import { useStore } from "./store/useStore";
import { generateTasks } from "./data/generateTasks";
import ViewSwitcher from "./components/ViewSwitcher";
import Kanban from "./components/Kanban";
import ListView from "./components/ListView";
import Timeline from "./components/Timeline";
import "./App.css";

export default function App() {
  const { setTasks, view } = useStore();

  useEffect(() => {
    setTasks(generateTasks());
  }, []);

  return (
    <div className="p-4">
      <ViewSwitcher />

      {view === "kanban" && <Kanban />}
      {view === "list" && <ListView />}
      {view === "timeline" && <Timeline />}
    </div>
  );
}