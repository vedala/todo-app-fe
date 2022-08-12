import React from "react"

function TaskList(props) {

     const tasksToDisplay = props.tasks.filter(task => {
        if (props.selectedTab === props.MENU_TABS.ALL) {
            return true
        } else if (props.selectedTab === props.MENU_TABS.TO_DO) {
            return task.active
        } else {
            return !task.active
        }
    })

    const tasksElems = tasksToDisplay.map(task => {
        return (
            <li
                key={task.id}
            >
                <input
                    type="checkbox"
                    checked={!task.active}
                    onChange={() => handleCheckboxClick(task.id)}
                />
                <span>{task.text}</span>
                {props.deleteModeStatus &&
                    <button
                        onClick={() => handleTaskDeleteClick(task.id)}
                    >
                        DEL
                    </button>
                }
            </li>
        )
    })

    function handleCheckboxClick(taskId) {
        props.updateTaskStatus(taskId)
    }

    function handleTaskDeleteClick(taskId) {
        props.deleteTask(taskId)
    }

    return (
        <div className="task-list-container">
            <ul className="task-list">
                {tasksElems}
            </ul>
        </div>
    )
}

export default TaskList
