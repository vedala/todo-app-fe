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
        console.log(tabClicked)
    }

    return (
        <ul className="menu">
            <li onClick={() => handleClick(MENU_TABS.TO_DO)}>TO DO</li>
            <li onClick={() => handleClick(MENU_TABS.DONE)}>DONE</li>
            <li onClick={() => handleClick(MENU_TABS.ALL)}>ALL</li>
        </ul>
    )
}

export default Menu
