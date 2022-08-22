import React from "react"
import ShortUniqueId from "short-unique-id";
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"

function App() {

    const MENU_TABS = {
        TO_DO: 'TO_DO',
        DONE: 'DONE',
        ALL: 'ALL'
    }

    const LOCAL_STORAGE_KEY = "ToDoAppItems"

    const [selectedTab, setSelectedTab] = React.useState(MENU_TABS.TO_DO)

    const [deleteModeStatus, setDeleteModeStatus] = React.useState(false)

    function handleTabSelection(tabClicked) {
        setSelectedTab(tabClicked)
    }

    function handleDeleteModeClick() {
        setDeleteModeStatus(prevState => !prevState)
    }

    function assignFalseToDeleteModeStatus() {
        setDeleteModeStatus(false)
    }

    const uid = new ShortUniqueId()

    const [tasks, setTasks] = React.useState(() => {
        const savedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        return savedTasks || []
    })

    React.useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks])

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

    function deleteTask(taskId) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
    }

    function deleteAllTasks() {
        setTasks([])
    }

    return (
        <div className="app">
            <Header
                selectedTab={selectedTab}
                MENU_TABS={MENU_TABS}
                tasks={tasks}
                handleTaskCreate={handleTaskCreate}
                handleTabSelection={handleTabSelection}
                deleteModeStatus={deleteModeStatus}
            />
            <Main
                selectedTab={selectedTab}
                MENU_TABS={MENU_TABS}
                tasks={tasks}
                updateTaskStatus={updateTaskStatus}
                deleteTask={deleteTask}
                deleteAllTasks={deleteAllTasks}
                deleteModeStatus={deleteModeStatus}
                handleDeleteModeClick={handleDeleteModeClick}
                assignFalseToDeleteModeStatus={assignFalseToDeleteModeStatus}
            />
        </div>
    );
}

export default App;
