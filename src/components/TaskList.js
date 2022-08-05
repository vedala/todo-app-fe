import React from "react"

function TaskList(props) {
    const tasksElems = props.tasks.map((task, index) => {
        return <li key={index}>{task.text}</li>
    })

    return (
        <ul>
            {tasksElems}
        </ul>
    )
}

export default TaskList
