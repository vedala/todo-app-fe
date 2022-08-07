import React from "react"

function TaskList(props) {
    const [deletePrepStatus, setDeletePrepStatus] = React.useState(false)

    const tasksToDisplay = props.tasks.filter(task => {
        if (props.selectedTab === props.MENU_TABS.ALL) {
            return true
        } else if (props.selectedTab === props.MENU_TABS.TO_DO) {
            return task.active
        } else {
            return !task.active
        }
    })

    function handleCheckboxClick(taskId) {
        props.updateTaskStatus(taskId)
    }

    const tasksElems = tasksToDisplay.map((task, index) => {
        return (
            <li
                key={index}
            >
                <input
                    type="checkbox"
                    checked={!task.active}
                    onChange={() => handleCheckboxClick(task.id)}
                />
                <span>{task.text}</span>
            </li>
        )
    })

    function handleDeletePrepClick() {
        setDeletePrepStatus(prevState => !prevState)
    }

    return (
        <div className="task-list">
            {deletePrepStatus && <button>DELETE ALL TASKS</button>}
            <ul>
                {tasksElems}
            </ul>
            <button onClick={handleDeletePrepClick}>
                {deletePrepStatus ? "Delete Cancel" : "Delete Prepare"}
            </button>
        </div>
    )
}

export default TaskList
