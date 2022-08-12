import React from "react"

function Overlay(props) {
    return (
        <div className="overlay">
            <div className="overlay-content">
                <h3>Clear All Tasks</h3>
                <p>Are you sure you want to remove all tasks?</p>
                <div>
                    <button
                        onClick={props.cancelDisplayOverlay}
                    >
                        CANCEL
                    </button>
                    <button>
                        CONFIRM
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Overlay
