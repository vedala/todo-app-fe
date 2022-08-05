import React from "react"
import './App.css';
import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = React.useState(["task1", "task2"])

  function handleTasksChange(newTask) {
    setTasks(prevState => {
      return [...prevState, newTask]
    })
  }

  return (
    <div className="App">
      <Header handleTasksChange={handleTasksChange} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
