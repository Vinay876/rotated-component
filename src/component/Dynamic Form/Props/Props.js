import React from 'react'

const Props = ({name,changename}) => {
  return (
    <div>
    <h1>{name}</h1>
      <button onClick={()=>changename('system')}>Click To Change</button>
    </div>
  )
}

export default Props
