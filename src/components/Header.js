import React from "react"
import TaskInput from "./TaskInput"
import Menu from "./Menu"

function Header(props) {
    return (
        <div className="header">
            <h1>To-Do List</h1>
            <TaskInput handleTaskCreate={props.handleTaskCreate}/>
            <Menu
                selectedTab={props.selectedTab}
                MENU_TABS={props.MENU_TABS}
                tasks={props.tasks}
                handleTabSelection={props.handleTabSelection}
            />
        </div>
    )
}

export default Header
