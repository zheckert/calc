import React, { useState } from "react"

export const calcContext = React.createContext()

export const ContextProvider = (props) => {
    const [ calcState, setCalcState ] = useState([])

    const pushNumber = (num) => {
        setCalcState(calcState => [...calcState, num])
        console.log(calcState)
    }

    const test = (num) => {
        console.log(num)
    }

    return(
        <calcContext.Provider value={pushNumber, test}>
            { props.children}
        </calcContext.Provider>
    )
}