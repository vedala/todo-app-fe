import React from "react"

function TaskInput() {
    return (
        <div>
            <label htmlFor="task">Add Task</label>
            <input
                type="text"
                name="task"
                id="task"
            />
            <button>Create</button>
        </div>
    )
}

export default TaskInput
