import React from 'react'
import { useBrowser } from '../../Context/browser-context'
import Home from '../Home/Home'

function Task() {
  const {name} = useBrowser()
  return (
    <div>
      <div className='text-white font-serif text-3xl'
    >{`${name}`}</div>
    <div>
      <Home/>
    </div>
    </div>
  )
}

export default Task