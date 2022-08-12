import React from "react"
import TaskList from "./TaskList"
import DeleteConfirm from "./DeleteConfirm"
import Overlay from "./Overlay"

function Main(props) {
    const [deleteModeStatus, setDeleteModeStatus] = React.useState(false)

    const [displayOverlay, setDisplayOverlay] = React.useState(false)

    function handleDeleteModeClick() {
        setDeleteModeStatus(prevState => !prevState)
    }

    function handleDeleteConfirmClick() {
        setDisplayOverlay(prevState => !prevState)
    }

    function handleCancelDisplayOverlay() {
        setDisplayOverlay(prevState => !prevState)
    }

    function handleConfirmDisplayOverlay() {
        props.deleteAllTasks()
        setDisplayOverlay(prevState => !prevState)
        setDeleteModeStatus(false)
    }

    return (
        <div className="main">
            <div className="main-sub-container">
                <div className="main-sub-top">
                    {deleteModeStatus && <DeleteConfirm handleDeleteConfirmClick={handleDeleteConfirmClick}/>}
                    <TaskList
                        tasks={props.tasks}
                        MENU_TABS={props.MENU_TABS}
                        selectedTab={props.selectedTab}
                        deleteModeStatus={deleteModeStatus}
                        updateTaskStatus={props.updateTaskStatus}
                        deleteTask={props.deleteTask}
                    />
                </div>
                <div className="main-sub-bottom">
                    <button className="main--sub-delete-prepare" onClick={handleDeleteModeClick}>
                        {deleteModeStatus ? "Exit Delete Mode" : "Enter Delete Mode"}
                    </button>
                </div>
            </div>
            {displayOverlay &&
                <Overlay
                    cancelDisplayOverlay={handleCancelDisplayOverlay}
                    deleteAllTasks={handleConfirmDisplayOverlay}
                />
            }
        </div>
    )
}

export default Main
