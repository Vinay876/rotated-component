import React from 'react'

const DynamicForm = () => {
    const getInputValues = () => { };
    return (
        <div className="App">
            <div className="input-container">
                <input placeholder="Name" name="name" onChange={getInputValues} />
                <input placeholder="Age" name="age" onChange={getInputValues}/>
                <input placeholder="Years of Experience" name="yoe" onChange={getInputValues} />
            </div>
            <button>Add New Group</button>
        </div>
    )
}

export default DynamicForm
