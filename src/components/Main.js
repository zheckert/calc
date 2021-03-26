import React from "react"

import { Display } from "./Display"
import { Button } from "./Button"

import { numbers } from "./index"
import { operations } from "./index"

export const Main = () => {

    let buttons = numbers.map((num) =>
        <Button button={num.num} />
    )

    let operators = operations.map((op) =>
        <Button button={op.operation} />
    )

    return(
        <div>
            <h1>This is a Calcualtor</h1>
            <Display />
            <div className="temp">
                <div className="gridParent">
                    { buttons }
                </div>
                <div>
                    { operators }
                </div>
                You might be wondering why I'm using divs instead of buttons. I'm wondering the same thing
            </div>
        </div>
    )
}