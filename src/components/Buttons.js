import React from "react"

import {Button} from "@material-ui/core"

export const Buttons = (props) => {
    return(
        <div className="gridChild">
            <Button variant="contained">{props.button}</Button>
        </div>
    )
}