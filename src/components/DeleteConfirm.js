import React from "react"

function DeleteConfirm(props) {

    return (
        <div>
            <button onClick={props.handleDeleteConfirmClick}>DELETE ALL TASKS</button>
        </div>
    )

}

export default DeleteConfirm
