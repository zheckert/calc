import React, { useState } from "react"

import {Button} from "@material-ui/core"

export const Buttons = (props) => {
    const [numArray, setNumArray] = useState([])

    let arr = []

    const funcPush = (num) => {
        console.log("This is num", num)
        setNumArray((props.button))
        arr.push(num)
        console.log("Here is my array", arr)
    }

    return(
        <div className="gridChild">
            {/* <Button variant="contained" onClick={() => (console.log(`${props.button} was clicked`))}>{props.button}</Button> */}
            <Button variant="contained" onClick={() => funcPush(props.button)}
                >{props.button}</Button>
        </div>
    )
}

//old and janky below
// export const Buttons = (props) => {

//     let arr = []

//     const funcPush = (num) => {
//         console.log(num)
//         arr.push(num)
//         console.log(arr)
//     }

//     return(
//         <div className="gridChild">
//             {/* <Button variant="contained" onClick={() => (console.log(`${props.button} was clicked`))}>{props.button}</Button> */}
//             <Button variant="contained" onClick={() => funcPush(props.button)}
//                 >{props.button}</Button>
//         </div>
//     )
// }