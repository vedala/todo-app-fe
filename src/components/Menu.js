import React from "react"

function Menu(props) {

    return (
        <ul className="menu">
            <li
                onClick={() => props.handleTabSelection(props.MENU_TABS.TO_DO)}
                className={props.selectedTab === props.MENU_TABS.TO_DO ? "menu--selected" : undefined}
            >
                <span>TO DO</span>
            </li>
            <li
                onClick={() => props.handleTabSelection(props.MENU_TABS.DONE)}
                className={props.selectedTab === props.MENU_TABS.DONE ? "menu--selected" : undefined}
            >
                <span>DONE</span>
            </li>
            <li
                onClick={() => props.handleTabSelection(props.MENU_TABS.ALL)}
                className={props.selectedTab === props.MENU_TABS.ALL ? "menu--selected" : undefined}
            >
                <span>ALL</span>
            </li>
        </ul>
    )
}

export default Menu
