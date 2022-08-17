import React from "react"

function TaskInput(props) {
    const [taskText, setTaskText] = React.useState("")
    const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true)

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

    React.useEffect(() => {
        setButtonIsDisabled(taskText.length === 0)
    }, [taskText])

    return (
        <form>
            <label htmlFor="task">Add Task</label>
            <input
                id="task"
                type="text"
                name="task"
                onChange={handleChange}
                value={taskText}
                disabled={props.deleteModeStatus}
            />
            <button
                onClick={handleSubmit}
                disabled={buttonIsDisabled || props.deleteModeStatus}
            >
                Create
            </button>
        </form>
    )
}

export default TaskInput
