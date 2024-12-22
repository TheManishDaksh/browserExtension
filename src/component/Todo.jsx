import React, { useEffect, useState } from 'react'
import {v4 as uuid} from "uuid"
import close from "../assets/close.png"

 const Todo =()=> {

    const [todo, setTodo] = useState()
    const [todoList, setTodoList] = useState([])

    useEffect(()=>{
        const todoItems = JSON.parse(localStorage.getItem("todo"))
        todoItems && setTodoList(todoItems)
    },[])

    const handleChange =(event)=>{
        setTodo(event.target.value)
    }

    const handleEnter =(event)=>{
        if(event.key === "Enter"){
            const updatedList = [ ...todoList, {_id : uuid(), todo, isCompleted : false }];
            setTodoList(updatedList);
            setTodo("");
            localStorage.setItem("todo", JSON.stringify(updatedList));
            
        }
    }

    const handleCheckbox =(todoId)=>{
        const updatedList = todoList.map(todo => todoId === todo._id ? {...todo, isCompleted : !todo.isCompleted}:todo)
        setTodoList(updatedList)
        localStorage.setItem("todo", JSON.stringify(updatedList))
    }

    const handleDeleteTodo =(todoId)=>{                          
        const updatedList = todoList.filter(({_id})=> _id !==  todoId)
        setTodoList(updatedList)
        localStorage.setItem("todo", JSON.stringify(updatedList))
    }
 
  return (
    <div>
        <div>
            <input type="text" value={todo} className='bg-transparent outline-none border-white border-b-2 border-solid font-serif'
            onChange={handleChange} onKeyDown={handleEnter}/>
        </div>
        <div className='bg-slate-500 rounded-lg pl-2 pr-8 break-words w-80 font-serif'>
            {todoList && todoList.map(({_id, todo, isCompleted})=>{
                return (
                    <div key={_id} >
                        <label className={`${isCompleted ? "line-through" : ""}`} > 
                        <input type="checkbox" 
                        checked= {isCompleted} onChange={()=>handleCheckbox(_id)}
                        className='pl-2'
                        />
                         {todo}</label>
                        
                        <button onClick={()=>handleDeleteTodo(_id)} className='w-6 absolute py-1' >
                            <img src={close} /></button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Todo