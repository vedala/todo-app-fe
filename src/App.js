import { isDocument } from "@testing-library/user-event/dist/utils";
import React from "react"
import ShortUniqueId from "short-unique-id";
import './App.css';
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import Footer from "./components/Footer"

function App() {

  const MENU_TABS = {
    TO_DO: 'TO_DO',
    DONE: 'DONE',
    ALL: 'ALL'
  }

  const [selectedTab, setSelectedTab] = React.useState(MENU_TABS.TO_DO)

  function handleTabSelection(tabClicked) {
      setSelectedTab(tabClicked)
  }

  const uid = new ShortUniqueId()

  const [tasks, setTasks] = React.useState(
    [
      {
        id: uid(),
        text: "task1",
        active: true
      },
      {
        id: uid(),
        text: "task2",
        active: true
      },
      {
        id: uid(),
        text: "task3",
        active: false
      },
      {
        id: uid(),
        text: "task4",
        active: false
      }
    ]
  )

  function handleTaskCreate(newTaskText) {
    const newTask = {
      id: uid(),
      text: newTaskText,
      active: true
    }

    setTasks(prevState => {
      return [...prevState, newTask]
    })
  }

  function updateTaskStatus(taskId) {
    setTasks(prevTasks => prevTasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            active: !task.active
          }
        } else {
          return task
        }
    }))
  }

  return (
    <div className="App">
      <Header
        selectedTab={selectedTab}
        MENU_TABS={MENU_TABS}
        tasks={tasks}
        handleTaskCreate={handleTaskCreate}
        handleTabSelection={handleTabSelection}
      />
      <TaskList
        selectedTab={selectedTab}
        MENU_TABS={MENU_TABS}
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
      />
      <Footer />
    </div>
  );
}

export default App;
