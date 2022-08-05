import React from "react"

function TaskInput(props) {
    const [taskText, setTaskText] = React.useState("")

    function handleChange(event) {
        const {name, value} = event.target
        setTaskText(value)
    }

    function handleButtonClick() {
        props.handleTasksChange(taskText)
    }

    return (
        <div>
            <label htmlFor="task">Add Task</label>
            <input
                id="task"
                type="text"
                name="task"
                onChange={handleChange}
            />
            <button
                onClick={handleButtonClick}
            >
                Create
            </button>
        </div>
    )
}

export default TaskInput
