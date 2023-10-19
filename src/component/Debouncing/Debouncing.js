// DEBOUNCING IN JAVASCRIPT IS THAT WHEN U SEARCHING FOR WHOLE  WORD OR NOT A EVERY SINGLE CHARACTER

import React from 'react'
import './debouncing.css'
import axios from 'axios';
const userApi = `https://jsonplaceholder.typicode.com/users?username=`
const Debouncing = () => {
    console.log(userApi)
    const searchUser = async (value) => {
        try {
            const response = await axios.get(userApi + value)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    // searchUser()
    return (
        <div className='input'>
            <input
                type="text"
                placeholder='Search Your User'
                onChange={(event) => searchUser(event.target.value)} />
        </div>
    )
}

export default Debouncing
