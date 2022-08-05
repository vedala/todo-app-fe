import React from "react"

function TaskList(props) {
    const tasksToDisplay = props.tasks.filter(task => {
        if (props.selectedTab === props.MENU_TABS.ALL) {
            return true
        } else if (props.selectedTab === props.MENU_TABS.TO_DO) {
            return task.status === props.TASK_STATUS.ACTIVE
        } else {
            return task.status === props.TASK_STATUS.DONE
        }
    })

    const tasksElems = tasksToDisplay.map((task, index) => {
        return <li key={index}>{task.text}</li>
    })

    return (
        <ul className="task-list">
            {tasksElems}
        </ul>
    )
}

export default TaskList
