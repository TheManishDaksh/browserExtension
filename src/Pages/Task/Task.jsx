import React, { useEffect, useRef, useState } from 'react'
import { useBrowser } from '../../Context/browser-context'
import close from "../../assets/close.png"
import { quotes } from '../../db/quote'
import Todo from '../../component/Todo'

const index = Math.floor(Math.random()*quotes.length)
const quote = quotes[index].quote

 const Task =()=> {

  const [check, setChecked] = useState(false)
  const [todoIsOpen, setTodoIsOpen] = useState(false);
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

  const getCurrentTime =()=>{

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
  const taskForm =(event)=>{
    event.preventDefault()
  }

  const handleForm =(event)=>{
    if(event.key === "Enter" && taskRef.current.value.length > 0){
      BrowserDispatch({
        type : "TASK",
        payload : taskRef.current.value
      })
      localStorage.setItem("task", taskRef.current.value)
    }
  }

  const handleTaskChange =(event)=>{
    if(event.target.checked){
      setChecked(check => !check)
    }else{
      setChecked(check => !check)
    }
  localStorage.setItem("toggleCheck", !check) 
  }

  const handleDelete =()=>{
    BrowserDispatch({
      type : "CLEAR"
    })
    setChecked(false) 
    localStorage.removeItem("task")
    localStorage.removeItem("toggleCheck")
  }

  const addTodo =()=>{
    setTodoIsOpen(todoIsOpen => !todoIsOpen)
  }

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
      placeholder='write your todays focus'
      className='bg-transparent outline-none  border-solid border-b-2 border-white text-center text-white text-2xl font-serif'
            />
      </form>
    </div>
    ):(  
      <div>
        <div >
        <div className='text-white text-2xl font-serif pt-5 pb-3 text-center h-100vh'
        >Todays Focus</div>
        <div className='text-center py-5'>
        <input type="checkBox" id='checkbox' className='px-5 gap-x-5 hover:cursor-pointer' onChange={handleTaskChange}/>
        <label for="checkbox" 
        className = { `bg-transparent outline-none text-center text-white text-2xl font-serif pt-10 px-3 hover: cursor-pointer ${check ? "line-through" : ""}` }
        >{task}</label>  
        <button className='w-7 absolute bg-transparent' onClick={handleDelete}> 
          <img src= {close} alt='delete'/>
           </button>
           </div>
      </div>
      <div className='text-white text-xl font-serif pt-32 text-center w-9/12'>
        {quote}
      </div>
      </div>
    )}
    <div className='absolute bottom-10 right-12 text-white text-xl '>
      {todoIsOpen && <Todo/>}
      <div className='bg-slate-600 rounded-lg px-4 py-2 font-serif'>
        <button onClick={addTodo}>Todo</button>
      </div>
    </div>
    </div>
  )
}

export default Task