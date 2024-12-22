import {images} from "./db/image"
import './App.css'
import Home from "./Pages/Home/Home"
import {useBrowser} from "./Context/browser-context"
import Task from "./Pages/Task/Task"
import { useEffect } from "react"


const index = Math.floor(Math.random()*images.length)
const bgImage = images[index].image;
function App() {
  
  const {name, BrowserDispatch} = useBrowser()

  useEffect(()=>{
    const userName = localStorage.getItem("name")
    BrowserDispatch({
      type : "NAME",
      payload : userName 
    })
  },[])
  
  return (
    <div className="h-screen w-full bg-cover bg-center"
    style={{backgroundImage : `url(${bgImage})`}}
    >
      {name ? <Task/> : <Home/>}
    </div>
  )
}

export default App
