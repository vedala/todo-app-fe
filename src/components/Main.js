import React from "react"
import TaskList from "./TaskList"
import DeleteConfirm from "./DeleteConfirm"
import Overlay from "./Overlay"

function Main(props) {
    const [displayOverlay, setDisplayOverlay] = React.useState(false)

    function handleDeleteConfirmClick() {
        setDisplayOverlay(prevState => !prevState)
    }

    function handleCancelDisplayOverlay() {
        setDisplayOverlay(prevState => !prevState)
    }

    function handleConfirmDisplayOverlay() {
        props.deleteAllTasks()
        setDisplayOverlay(prevState => !prevState)
        props.assignFalseToDeleteModeStatus()
    }

    return (
        <div className="main">
            <div className="main-sub-container">
                <div className="main-sub-top">
                    {props.deleteModeStatus && <DeleteConfirm handleDeleteConfirmClick={handleDeleteConfirmClick}/>}
                    <TaskList
                        tasks={props.tasks}
                        MENU_TABS={props.MENU_TABS}
                        selectedTab={props.selectedTab}
                        deleteModeStatus={props.deleteModeStatus}
                        updateTaskStatus={props.updateTaskStatus}
                        deleteTask={props.deleteTask}
                    />
                </div>
                <div className="main-sub-bottom">
                    <button className="main--sub-delete-prepare" onClick={props.handleDeleteModeClick}>
                        {props.deleteModeStatus ? "Exit Delete Mode" : "Enter Delete Mode"}
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
