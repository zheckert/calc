import React, { useState } from "react"

export const calcContext = React.createContext()

export const ContextProvider = (props) => {
    
    const [ calcState, setCalcState ] = useState([0])

    const pushNumber = async(num) => {
        await setCalcState(calcState => [...calcState, num])
        console.log(calcState)
    }

    const clearer = () => {
        setCalcState(0)
    }

    return(
        <calcContext.Provider value={{pushNumber, calcState, clearer}}>
            { props.children}
        </calcContext.Provider>
    )
}