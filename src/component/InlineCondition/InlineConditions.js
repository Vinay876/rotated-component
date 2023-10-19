import React, { useEffect } from 'react'

const InlineConditions = () => {
    useEffect(()=>{
        let age=26;
        let name='vinay'
    // if (age > 26) {
    // console.log("You are now old");
    // } else if (name === "vinay" && age=26) {
    // console. Log("I am 26 years old");
    // console.log("Nishant is my Name");
    // } else {
    // console.log("Nishant is not my Name");
    // console.log("I am Less than 26 years old");
    // }
        age>26?console.log("you are now old"
        )
        :name==='vinay'&& age===26?(
           <> {console.log('my name is vinay i m 26 years old')

           }</>
        ):console.log('both conditions are not satisfied')
    })
  return (
    <div>
      Welcome
    </div>
  )
}

export default InlineConditions

