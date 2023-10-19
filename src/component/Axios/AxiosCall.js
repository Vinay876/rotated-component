import React, { useEffect,useState} from 'react'
import axios from 'axios';
import './axios.css'

const AxiosCall = () => {
const [users,setUsers]=useState([])

useEffect(()=>{
const fetchData=async()=>{
    try {
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        setUsers(response.data)
    } catch (error) {
        console.log(error,{
            message:"You Got An Error on getting this api"
        })

    }
}

fetchData()
},[])
    return (

      <div className='box'>
         {
            users.map((user)=>{
                return (

                        <div className="items">
                            <div className="content">
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    
                )
            })
         }
      </div>
    )
}

export default AxiosCall
