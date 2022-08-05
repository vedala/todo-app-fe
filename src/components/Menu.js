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
                TO DO
            </li>
            <li
                onClick={() => handleClick(MENU_TABS.DONE)}
                className={selectedTab === MENU_TABS.DONE ? "menu--selected" : undefined}
            >
                DONE
            </li>
            <li
                onClick={() => handleClick(MENU_TABS.ALL)}
                className={selectedTab === MENU_TABS.ALL ? "menu--selected" : undefined}
            >
                ALL
            </li>
        </ul>
    )
}

export default Menu
