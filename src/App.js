import { isDocument } from "@testing-library/user-event/dist/utils";
import React from "react"
import ShortUniqueId from "short-unique-id";
import './App.css';
import Header from "./components/Header"
import TaskList from "./components/TaskList"

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

  const TASK_STATUS = {
    ACTIVE: 'ACTIVE',
    DONE: 'DONE'
  }

  const uid = new ShortUniqueId()

  const [tasks, setTasks] = React.useState(
    [
      {
        id: uid(),
        text: "task1",
        status: TASK_STATUS.ACTIVE
      },
      {
        id: uid(),
        text: "task2",
        status: TASK_STATUS.ACTIVE
      },
      {
        id: uid(),
        text: "task3",
        status: TASK_STATUS.DONE
      },
      {
        id: uid(),
        text: "task4",
        status: TASK_STATUS.DONE
      }
    ]
  )

  function handleTaskCreate(newTaskText) {
    const newTask = {
      id: uid(),
      text: newTaskText,
      status: TASK_STATUS.ACTIVE
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
            status: task.status === TASK_STATUS.ACTIVE ? TASK_STATUS.DONE : TASK_STATUS.ACTIVE
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
        handleTaskCreate={handleTaskCreate}
        handleTabSelection={handleTabSelection}
      />
      <TaskList
        selectedTab={selectedTab}
        MENU_TABS={MENU_TABS}
        tasks={tasks}
        TASK_STATUS={TASK_STATUS}
        updateTaskStatus={updateTaskStatus}
      />
    </div>
  );
}

export default App;
