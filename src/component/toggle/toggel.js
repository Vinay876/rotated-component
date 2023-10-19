import React,{useState} from 'react'
import './toggel.css'
const Toggel = () => {

    const [isvisible,setIsVisible]=useState(false)
    const Show=()=>{
        setIsVisible(!isvisible)
    }
  return (
    <div>
    {!isvisible?<div className='box1'>gfds</div>:""}

      <button onClick={Show} className='rotating'>Clik kr</button>
    </div>
  )
}

export default Toggel
