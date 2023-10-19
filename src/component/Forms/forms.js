import React, { useState } from 'react'

const Forms = () => {
 const [objData,setObjData]=useState({})

    const getInput=(value,name)=>{
        let data={[name]:value}

        setObjData({...objData,...data})
    };
    // console.log(objData)
    const submit=(e)=>{
        e.preventDefault()
        console.log(objData)
    }
  return (
    <form action="" onSubmit={submit}>
    <div className="form">
    <input placeholder="Write your Name.."
    type='text'
    name="name"
     onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <input placeholder="Write your Age.."
      type='number'
     name="age"
     onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <input placeholder="Write your Hobbies.."
      type='text'
     name="hobbies"
     onChange={(e)=>getInput(e.target.value,e.target.name)}/>
    <input placeholder="Write a Date.."
    type="date"
     name="date"
     onChange={(e)=>getInput(e.target.value,e.target.name) }/>
    <button type='submit  '>Submit</button>
    <button type='reset'>Reset</button>
    </div>
    </form>
  )
}

export default Forms
