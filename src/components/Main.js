import React from "react"
import TaskList from "./TaskList"
import DeleteConfirm from "./DeleteConfirm"

function Main(props) {
    const [deletePrepStatus, setDeletePrepStatus] = React.useState(false)

    const [displayOverlay, setDisplayOverlay] = React.useState(false)

    function handleDeletePrepClick() {
        setDeletePrepStatus(prevState => !prevState)
    }

    function handleDeleteConfirmClick() {
        setDisplayOverlay(prevState => !prevState)
    }

    return (
        <div className="main">
            <div>
                {deletePrepStatus && <DeleteConfirm handleDeleteConfirmClick={handleDeleteConfirmClick}/>}
                <TaskList
                    tasks={props.tasks}
                    MENU_TABS={props.MENU_TABS}
                    selectedTab={props.selectedTab}
                    deletePrepStatus={deletePrepStatus}
                    handleDeletePrepClick={handleDeletePrepClick}
                    updateTaskStatus={props.updateTaskStatus}
                />
                <button onClick={handleDeletePrepClick}>
                    {deletePrepStatus ? "Delete Cancel" : "Delete Prepare"}
                </button>
            </div>
            {displayOverlay && <div className="delete-overlay">Overlay Window</div>}
        </div>
    )
}

export default Main
