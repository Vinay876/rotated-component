// REST API(POST,GET,PUT,DELETE)

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RestApi = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])


    // Post Request

    // const postData = async () => {
    //     try {
    //         const response = await axios.post('https://6528e2f9931d71583df288f0.mockapi.io/users', {
    //             name: name,
    //             age: 26,
    //             hobbies: ['Poetry', 'Cooking', 'Travelling']
    //         })
    //         console.log(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }




    // GET-DATA
    const fetchData = async () => {
        try {
            const response = await axios.get("https://6528e2f9931d71583df288f0.mockapi.io/users")
            // console.log(response.data)
            setUsers(response.data)
        } catch (error) {
            console.log(error, {
                message: "You Got An Error on getting this api"
            })

        }
    }

    useEffect(() => {

        fetchData()
    }, [])


    // UPDATE DATA 

    const UpdateData = async (id) => {
        console.log(id)
        try {
            const response = await axios.put(`https://6528e2f9931d71583df288f0.mockapi.io/users/${id}`, {

                name: name,
                age: 96,
                hobbies: ['Poetry', 'Cooking', 'Travelling', 'musician']
            })
            console.log(response.data)
        } catch (error) {
            console.log(error, {
                message: "You Got An Error on updating this api"
            })

        }
    }




    // DELETING DATA
    const DeleteData = async (id) => {
        try {
            const del = await axios.delete(`https://6528e2f9931d71583df288f0.mockapi.io/users/${id}`)
            console.log(del.id)
            fetchData()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            {/* <button onClick={postData}>POST DATA</button> */}
            {
                users.map((ele) => {
                    return (
                        <>
                            <div style={{ textAlign: 'center' }} key={ele.id}>

                                <h1>{`${ele.id}. ${ele.name}`}</h1>
                                <button onClick={() => UpdateData(ele.id)}>UPDATE</button>
                                <button onClick={() => DeleteData(ele.id)}>DELETE</button>
                            </div>
                        </>
                    )
                })
            }
        </div>


    )
}

export default RestApi
