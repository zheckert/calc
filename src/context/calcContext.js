import React, { useState } from "react"

export const calcContext = React.createContext()

export const ContextProvider = (props) => {
    
    const [ calcState, setCalcState ] = useState([0])

    const pushNumber = async(num) => {
        await setCalcState(calcState => [...calcState, num])
        console.log(calcState)
    }

    return(
        <calcContext.Provider value={{pushNumber, calcState}}>
            { props.children}
        </calcContext.Provider>
    )
}