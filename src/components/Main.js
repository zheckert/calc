import React, { useContext } from "react"
import { calcContext } from "../context/calcContext"

import { Display } from "./Display"
import { Buttons } from "./Buttons"

import { numbers } from "./index"
import { operations } from "./index"

import {Button} from "@material-ui/core"

export const Main = () => {

    const { clearer } = useContext(calcContext)

    let buttons = numbers.map((num) =>
        <Buttons button={num.num} />
    )

    let operators = operations.map((op) =>
        <Buttons button={op.operation} />
    )

    return(
        <div>
            <h1>This is a Calculator</h1>
            <div>
                <Display />
            </div>
            <div className="temp">
                <div className="gridParent">
                    { buttons }
                </div>
                <div>
                    { operators }
                </div>
                <div onClick={() => clearer()}>
                    CLEAR
                </div>
            </div>
        </div>
    )
}