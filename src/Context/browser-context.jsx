import { createContext, useContext, useReducer} from "react"
import { BrowserReducer } from "../Reducer/browser-reducer"

const initialValue = {
    name : ""
}

const BrowserContext = createContext(initialValue)

const BrowserProvider = ({Children})=>{

    const [{name}, browserDispatch] = useReducer(BrowserReducer, initialValue)
return(
    <BrowserContext.Provider value={{name, browserDispatch}}>
        {Children}
    </BrowserContext.Provider>
)}
const useBrowser =()=> useContext(BrowserContext)
export  {BrowserProvider, useBrowser}
