import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export const useUser = (userId) => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
        (
            async ()=>{
                const responce=await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
                setUser(responce.data)
            }
        )()
    },[userId])
  return user
}
