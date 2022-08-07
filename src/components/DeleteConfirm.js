import React from "react"

function DeleteConfirm() {

    const [displayOverlay, setDisplayOverlay] = React.useState(false)

    function handleDeleteConfirmClick() {
        setDisplayOverlay(prevState => !prevState)
    }

    return (
        <div>
            <button onClick={handleDeleteConfirmClick}>DELETE ALL TASKS</button>
            {displayOverlay && <div className="delete-overlay">Overlay Window</div>}
        </div>
    )

}

export default DeleteConfirm
