import React from 'react'
import { useBrowser } from '../../Context/browser-context'

function Home() {
    
const {name, browserDispatch} = useBrowser()

const handleForm = (event)=>{
    event.preventDefault();
}

 const handleKey = (event)=>{
    
    if(event.key === "Enter" && event.target.value.length > 0){
        browserDispatch({
            type : "NAME",
            payload : event.target.value
        })  
    }
}

  return (
    <div className="text-white text-4xl font-bold text-center pt-20 ">
        <h1 
      >Browser Extension</h1>
      <div className='text-3xl pt-20 flex flex-col font-semibold'>
        <span>What's your name </span>
        <span>
            <form onSubmit={handleForm}> 
            <input type="text" className='bg-transparent outline-none  border-solid border-b-2 border-white text-center'
                onKeyDown={handleKey}
                required
            />
            </form>
        </span>
      </div>
    </div>
  )
}

export default Home