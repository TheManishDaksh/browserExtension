import { createContext, useContext, useReducer} from "react"
import { BrowserReducer } from "../Reducer/browser-reducer"

const initialValue = {
    name : ""
}

const BrowserContext = createContext(initialValue)

const BrowserProvider = ({children})=>{

    const [{name}, BrowserDispatch] = useReducer(BrowserReducer, initialValue)
return( 
    <BrowserContext.Provider value={{name, BrowserDispatch}}>
        {children} 
    </BrowserContext.Provider>
)}
const useBrowser =()=> useContext(BrowserContext)
export  {BrowserProvider, useBrowser}
    