import React, { useContext } from "react"
import { calcContext } from "../context/calcContext"

export const Display = () => {

    const { calcState } = useContext(calcContext)

    return(
        <div className="display border">
            {calcState}
        </div>
    )
}