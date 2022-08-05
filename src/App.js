import React from "react"
import './App.css';
import Header from "./components/Header"
import TaskList from "./components/TaskList"

function App() {
  const TASK_STATUS = {
    ACTIVE: 'ACTIVE',
    DONE: 'DONE'
  }

  const [tasks, setTasks] = React.useState(
    [
      {
        text: "task1",
        status: TASK_STATUS.ACTIVE
      },
      {
        text: "task2",
        status: TASK_STATUS.ACTIVE
      },
      {
        text: "task3",
        status: TASK_STATUS.DONE
      },
      {
        text: "task4",
        status: TASK_STATUS.DONE
      }
    ]
  )

  function handleTaskCreate(newTaskText) {
    const newTask = {
      text: newTaskText,
      status: TASK_STATUS.ACTIVE
    }

    setTasks(prevState => {
      return [...prevState, newTask]
    })
  }

  return (
    <div className="App">
      <Header handleTaskCreate={handleTaskCreate} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
