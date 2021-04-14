const initialCalc = {
    default: 0
}

const AppOperations = (state, action) => {
    let change = { ...state }

    switch(change.default){
        case "add": {
            change.default += state
            break;
        }
        case "subtract": {
            change.default -= state
            break;
        }
        case "multiply": {
            change.default *= state
            break;
        }
        case "divide": {
            change.default /= state
            break;
        }
    }
}