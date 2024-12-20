import { createContext, useContext, useReducer} from "react"
import { BrowserReducer } from "../Reducer/browser-reducer"

const initialValue = {
    name : "",
    time : "",
    message : "",
    task : null
}

const BrowserContext = createContext(initialValue)

const BrowserProvider = ({children})=>{

    const [{name, time, message, task}, BrowserDispatch] = useReducer(BrowserReducer, initialValue)
return( 
    <BrowserContext.Provider value={{name, time,message,task, BrowserDispatch}}>
        {children} 
    </BrowserContext.Provider>
)}
const useBrowser =()=> useContext(BrowserContext)
export  {BrowserProvider, useBrowser}
