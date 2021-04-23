import React, { useContext } from "react"
import { calcContext } from "../context/calcContext"

import {Button} from "@material-ui/core"

export const Buttons = (props) => {

    const { pushNumber } = useContext(calcContext)

    return(
        <div className="gridChild">
            <Button variant="contained" onClick={() => pushNumber(props.button)}>
                {props.button}
            </Button>
        </div>
    )
}