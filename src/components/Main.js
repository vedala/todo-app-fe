import React from "react"
import TaskList from "./TaskList"
import DeleteConfirm from "./DeleteConfirm"
import Overlay from "./Overlay"

function Main(props) {
    const [deletePrepStatus, setDeletePrepStatus] = React.useState(false)

    const [displayOverlay, setDisplayOverlay] = React.useState(false)

    function handleDeletePrepClick() {
        setDeletePrepStatus(prevState => !prevState)
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
        setDeletePrepStatus(false)
    }

    return (
        <div className="main">
            <div className="main-sub-container">
                <div className="main-sub-top">
                    {deletePrepStatus && <DeleteConfirm handleDeleteConfirmClick={handleDeleteConfirmClick}/>}
                    <TaskList
                        tasks={props.tasks}
                        MENU_TABS={props.MENU_TABS}
                        selectedTab={props.selectedTab}
                        deletePrepStatus={deletePrepStatus}
                        handleDeletePrepClick={handleDeletePrepClick}
                        updateTaskStatus={props.updateTaskStatus}
                        deleteTask={props.deleteTask}
                    />
                </div>
                <div className="main-sub-bottom">
                    <button className="main--sub-delete-prepare" onClick={handleDeletePrepClick}>
                        {deletePrepStatus ? "Delete Cancel" : "Delete Prepare"}
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
