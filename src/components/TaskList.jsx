import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-4xl font-bold text-cyan-900 py-6 text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2"> {/* pading = p */}
      {tasks.map((task) => (
        <TaskCard key ={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
