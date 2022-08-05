import React from "react"
import TaskInput from "./TaskInput"
import Menu from "./Menu"

function Header(props) {
    return (
        <div>
            <h1>To-Do List</h1>
            <TaskInput handleTaskCreate={props.handleTaskCreate}/>
            <Menu
                selectedTab={props.selectedTab}
                MENU_TABS={props.MENU_TABS}
                handleTabSelection={props.handleTabSelection}
            />
        </div>
    )
}

export default Header
