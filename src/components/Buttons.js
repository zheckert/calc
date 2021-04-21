import React, { useState } from "react"

import {Button} from "@material-ui/core"

export const Buttons = (props) => {
    const [numArray, setNumArray] = useState([])

    let arr = []

    console.log(numArray)

    return(
        <div className="gridChild">
            <Button variant="contained" onClick={() => setNumArray((numArray) => [...numArray, props.button])}
            >{props.button}</Button>
        </div>
    )
}