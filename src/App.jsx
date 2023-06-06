import TaskList from "./components/TaskList";
import Taskform from "./components/Taskform";

function App() {
  
    return (
    <main className="bg-zinc-500 h-screen">
      <div className="container mx-auto">
      <Taskform/>
      <TaskList/>
      </div>
    </main>
  );
}

export default App;
