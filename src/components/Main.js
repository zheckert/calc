import React, { useState } from "react"

import { Display } from "./Display"
import { Buttons } from "./Buttons"

import { numbers } from "./index"
import { operations } from "./index"

export const Main = () => {

    const [display, setDisplay] = useState([0])

    let buttons = numbers.map((num) =>
        <Buttons button={num.num} />
    )

    let operators = operations.map((op) =>
        <Buttons button={op.operation} />
    )

    const nums = () => {
        setDisplay()
    }

    return(
        <div>
            <h1>This is a Calculator</h1>
            <div>
                {display}
            </div>
            <Display />
            <div className="temp">
                <div className="gridParent">
                    { buttons }
                </div>
                <div>
                    { operators }
                </div>
            </div>
        </div>
    )
}