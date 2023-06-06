import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskform() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({ title, description });
    setTitle("")
    setDescription('')
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-cyan-900 py-6">Crea tu tarea</h1>
      <input
        placeholder="escribe tu tareas"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
        className="bg-slate-300 p-3 w-full mb-2 text-center"
      />
      <textarea
        placeholder="escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2 text-center" 
      ></textarea>
      <button className="bg-cyan-900 rounded-md p-1 hover:bg-cyan-700">Guardar</button>
    </form>
    </div>
  );
}

export default Taskform;
