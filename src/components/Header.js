import React from "react"
import TaskInput from "./TaskInput"
import Menu from "./Menu"

function Header(props) {
    return (
        <div>
            <h1>To-Do List</h1>
            <TaskInput handleTaskCreate={props.handleTaskCreate}/>
            <Menu />
        </div>
    )
}

export default Header
