import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TaskList from './TaskList'

test('renders the task list for TO DO tab', () => {
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

    render(<TaskList tasks={tasks} MENU_TABS={MENU_TABS} selectedTab={MENU_TABS.TO_DO} />)
    const items = screen.getAllByText(/item/)
    expect(items.length).toBe(3)
    expect(items[0]).toHaveTextContent("item-1")
    expect(items[1]).toHaveTextContent("item-2")
    expect(items[2]).toHaveTextContent("item-5")

})

test('renders the task list for DONE tab', () => {
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

    render(<TaskList tasks={tasks} MENU_TABS={MENU_TABS} selectedTab={MENU_TABS.DONE} />)
    const items = screen.getAllByText(/item/)
    expect(items.length).toBe(2)
    expect(items[0]).toHaveTextContent("item-3")
    expect(items[1]).toHaveTextContent("item-4")

})


test('renders the task list for ALL tab', () => {
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

    render(<TaskList tasks={tasks} MENU_TABS={MENU_TABS} selectedTab={MENU_TABS.ALL} />)
    const items = screen.getAllByText(/item/)
    expect(items.length).toBe(5)
    expect(items[0]).toHaveTextContent("item-1")
    expect(items[1]).toHaveTextContent("item-2")
    expect(items[2]).toHaveTextContent("item-3")
    expect(items[3]).toHaveTextContent("item-4")
    expect(items[4]).toHaveTextContent("item-5")

})
