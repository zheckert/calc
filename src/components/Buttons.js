import React, { useContext } from "react"
import { calcContext } from "../context/calcContext"

import {Button} from "@material-ui/core"

export const Buttons = (props) => {
    // const [numArray, setNumArray] = useState([])

    const { pushNumber } = useContext(calcContext)

    // console.log(numArray)

    return(
        // <div className="gridChild">
        //     <Button variant="contained" onClick={() => setNumArray((numArray) => [...numArray, props.button])}
        //     >{props.button}</Button>
        // </div>
        <div className="gridChild">
            {/* <Button variant="contained" onClick={() => setCalcState(calcState => [...calcState, props.button])}>{props.button}</Button> */}
            {/* <Button variant="contained" onClick={() => pushNumber(props.button)}>
                {props.button}
            </Button> */}
            <Button variant="contained" onClick={() => pushNumber(props.button)}>
                {props.button}
            </Button>
        </div>
    )
}