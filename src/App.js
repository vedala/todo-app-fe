import React from "react"
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
      />
    </div>
  );
}

export default App;
