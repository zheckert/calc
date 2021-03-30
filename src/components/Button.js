import React from "react"

export const Button = (props) => {
    return(
        <div className="gridChild">
            <button>{props.button}</button>
        </div>
    )
}