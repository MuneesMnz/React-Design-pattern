import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const useCurrentUser = () => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
        (
            async ()=>{
                const responce=await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                setUser(responce.data)
            }
        )()
    },[])
  return user
}
