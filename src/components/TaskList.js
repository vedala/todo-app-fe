import React from "react"

function TaskList(props) {
    const tasksElems = props.tasks.map((task, index) => {
        return <p key={index}>{task}</p>
    })

    return (
        <div>
            {tasksElems}
        </div>
    )
}

export default TaskList
