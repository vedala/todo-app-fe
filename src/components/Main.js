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
                    />
                </div>
                <div className="main-sub-bottom">
                    <button className="main--sub-delete-prepare" onClick={handleDeletePrepClick}>
                        {deletePrepStatus ? "Delete Cancel" : "Delete Prepare"}
                    </button>
                </div>
            </div>
            {displayOverlay && <div className="overlay">Overlay Div</div>}
        </div>
    )
}

export default Main
