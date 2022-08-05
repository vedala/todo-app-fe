import React from "react"

function TaskInput(props) {
    const [taskText, setTaskText] = React.useState("")

    function handleChange(event) {
        const {name, value} = event.target
        setTaskText(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (taskText.length > 0) {
            props.handleTaskCreate(taskText)
            setTaskText("")
        }
    }

    return (
        <form>
            <label htmlFor="task">Add Task</label>
            <input
                id="task"
                type="text"
                name="task"
                onChange={handleChange}
                value={taskText}
            />
            <button
                onClick={handleSubmit}
            >
                Create
            </button>
        </form>
    )
}

export default TaskInput
