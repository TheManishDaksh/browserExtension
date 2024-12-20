import React, { useEffect, useRef, useState } from 'react'
import { useBrowser } from '../../Context/browser-context'

function Task() {

  const [check, setChecked] = useState(false)
  const taskRef = useRef();
  
  const { time, BrowserDispatch, name, message, task} = useBrowser()

  useEffect(()=>{
    getCurrentTime()
  },[time])

  useEffect(()=>{
    const userTask = localStorage.getItem("task")
    BrowserDispatch({
      type : "TASK",
      payload : userTask
    })
  },[])

  useEffect(()=>{
    const toggleCheck = localStorage.getItem("toggleCheck")
    toggleCheck === "true" ? setChecked(true) : setChecked(false)
  },[])

  function getCurrentTime (){

    const today = new Date ()
    const hours = today.getHours()
    const minutes = today.getMinutes()

    const hour = hours <= 9 ? `0${hours}` : hours
    const minute = minutes <= 9 ? `0${minutes}` : minutes

    const currentTime = `${hour} : ${minute}`;

    setTimeout(getCurrentTime,1000);

    BrowserDispatch({
      type : "TIME",
      payload : currentTime
    })
    
    BrowserDispatch({
      type : "MESSAGE",
      payload : hour
    })
  }
  function taskForm(event){
    event.preventDefault()
  }

  function handleForm(event){
    if(event.key === "Enter" && taskRef.current.value.length > 0){
      BrowserDispatch({
        type : "TASK",
        payload : taskRef.current.value
      })
      localStorage.setItem("task", taskRef.current.value)
    }
  }

  function handleTaskChange(event){
    if(event.target.checked){
      setChecked(check => !check)
    }else{
      setChecked(check => !check)
    }
  }
  localStorage.setItem("toggleCheck", check) 

  return (
    <div className=' justify-items-center p-10 '>
      <div className='text-white font-serif text-8xl flex'>
     {`${time} `}
    </div>
    <br /> <br />
    <div className='text-white font-serif text-3xl'>
    {`${message}, ${name}`}
    </div>
    <br />
    {name !== null && task === null ? (
      <div>
      <form onSubmit={taskForm}> 
      <input type="text" ref={taskRef} 
      onKeyDown={handleForm} 
      placeholder='write your todays task'
      className='bg-transparent outline-none  border-solid border-b-2 border-white text-center text-white text-2xl font-serif'
            />
      </form>
    </div>
    ):(  
      <div >
        <div className='text-white text-2xl font-serif pt-10 pb-7 '
        >Todays Focus</div>
        <input type="checkBox" id='checkbox' className='px-5 gap-x-5 hover:cursor-pointer' onChange={handleTaskChange}/>
        <label for="checkbox" 
        className= {` bg-transparent outline-none text-center text-white text-2xl font-serif pt-10 px-3 hover: cursor-pointer ${check ? "line-through" : ""}`}
        >{task}</label>  
      </div>
    )}
    </div>
  )
}

export default Task