import React, { useEffect } from 'react'
import { useBrowser } from '../../Context/browser-context'

function Task() {
  const { time, BrowserDispatch,name, message} = useBrowser()

  useEffect(()=>{
    getCurrentTime()
  },[time])

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
  

  return (
    <div>
      <div className='text-white font-serif text-8xl flex'>
     {`${time} `}
    </div>
    <div className='text-white font-serif text-3xl'>
    {`${message}, ${name}`}
    </div>
    </div>
  )
}

export default Task