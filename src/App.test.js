import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

test('renders the App page', () => {
    render(<App />)

    expect(screen.getByRole("heading")).toHaveTextContent(/To-Do List/)
    expect(screen.getByRole("textbox")).toHaveValue("")
    const createBtn = screen.getByRole("button", { name: "Create" } )
    expect(createBtn).toBeInTheDocument()
    expect(createBtn).toBeDisabled()
    expect(screen.getByRole("button", { name: "Enter Delete Mode"} )).toBeInTheDocument()
})
