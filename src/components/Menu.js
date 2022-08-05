import React from "react"

function Menu() {
    const MENU_TABS = {
        TO_DO: 'TO_DO',
        DONE: 'DONE',
        ALL: 'ALL'
    }

    const [selectedTab, setSelectedTab] = React.useState(MENU_TABS.TO_DO)

    function handleClick(tabClicked) {
        setSelectedTab(tabClicked)
    }

    return (
        <ul className="menu">
            <li
                onClick={() => handleClick(MENU_TABS.TO_DO)}
                className={selectedTab === MENU_TABS.TO_DO ? "menu--selected" : undefined}
            >
                <span>TO DO</span>
            </li>
            <li
                onClick={() => handleClick(MENU_TABS.DONE)}
                className={selectedTab === MENU_TABS.DONE ? "menu--selected" : undefined}
            >
                <span>DONE</span>
            </li>
            <li
                onClick={() => handleClick(MENU_TABS.ALL)}
                className={selectedTab === MENU_TABS.ALL ? "menu--selected" : undefined}
            >
                <span>ALL</span>
            </li>
        </ul>
    )
}

export default Menu
