import React from "react"
import TaskInput from "./TaskInput"

function Header(props) {
    return (
        <div>
            <h1>To-Do List</h1>
            <TaskInput handleTaskCreate={props.handleTaskCreate}/>
        </div>
    )
}

export default Header
