import { render, screen } from '@testing-library/react'
import Menu from './Menu'

test('renders the menu', () => {
    const tasks = [
        {
            id: 1,
            text: "item-1",
            active: true,
        },
        {
            id: 2,
            text: "item-2",
            active: true,
        },
        {
            id: 3,
            text: "item-3",
            active: false,
        },
        {
            id: 4,
            text: "item-4",
            active: false,
        },
        {
            id: 5,
            text: "item-5",
            active: true,
        },
    ]

    const MENU_TABS = {
        TO_DO: 'TO_DO',
        DONE: 'DONE',
        ALL: 'ALL'
    }

    render(<Menu tasks={tasks} MENU_TABS={MENU_TABS.TO_DO} />)

    expect(screen.getByText("TO DO (3)")).toBeInTheDocument
    expect(screen.getByText("DONE (2)")).toBeInTheDocument
    expect(screen.getByText("ALL (5)")).toBeInTheDocument
})
