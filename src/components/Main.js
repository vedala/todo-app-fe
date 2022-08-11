import React from "react"
import TaskList from "./TaskList"
import DeleteConfirm from "./DeleteConfirm"

function Main(props) {
    const [deletePrepStatus, setDeletePrepStatus] = React.useState(false)

    function handleDeletePrepClick() {
        setDeletePrepStatus(prevState => !prevState)
    }

    function handleDeleteConfirmClick() {
        console.log("DeleteConfirmClick")
    }

    return (
        <div className="main">
            {deletePrepStatus && <DeleteConfirm handleDeleteConfirmClick={handleDeleteConfirmClick}/>}
            <TaskList
                tasks={props.tasks}
                MENU_TABS={props.MENU_TABS}
                selectedTab={props.selectedTab}
                deletePrepStatus={deletePrepStatus}
                handleDeletePrepClick={handleDeletePrepClick}
                updateTaskStatus={props.updateTaskStatus}
            />
            <button className="main--delete-prepare" onClick={handleDeletePrepClick}>
                {deletePrepStatus ? "Delete Cancel" : "Delete Prepare"}
            </button>
        </div>
    )
}

export default Main
