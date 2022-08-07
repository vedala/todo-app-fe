import React from "react"

function Menu(props) {

    const totalTasks = props.tasks.length
    const activeTasks = props.tasks.filter(task => task.active).length
    const doneTasks = totalTasks - activeTasks

    return (
        <ul className="menu">
            <li
                onClick={() => props.handleTabSelection(props.MENU_TABS.TO_DO)}
                className={props.selectedTab === props.MENU_TABS.TO_DO ? "menu--selected" : undefined}
            >
                <span>TO DO ({activeTasks})</span>
            </li>
            <li
                onClick={() => props.handleTabSelection(props.MENU_TABS.DONE)}
                className={props.selectedTab === props.MENU_TABS.DONE ? "menu--selected" : undefined}
            >
                <span>DONE ({doneTasks})</span>
            </li>
            <li
                onClick={() => props.handleTabSelection(props.MENU_TABS.ALL)}
                className={props.selectedTab === props.MENU_TABS.ALL ? "menu--selected" : undefined}
            >
                <span>ALL ({totalTasks})</span>
            </li>
        </ul>
    )
}

export default Menu
