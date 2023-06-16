import axios from "axios";
import {  useEffect } from "react";
import { useState } from "react"


export const withEditableUser=(Component,userId)=>{
    return props=>{
        const [originalUser,setOriginalUser]=useState(null);
        const [user,setUser]=useState(null)

        useEffect(()=>{
            (async()=>{
                const responce=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                setOriginalUser(responce.data)
                setUser(responce.data)
            })()
        },[])

        const onChangeUser=changes=>{
            setUser({...user,...changes})
        }

        const onSaveUser = async () =>{
            const responce=await axios.post(`https://jsonplaceholder.typicode.com/users/${userId}`,{user})
            setOriginalUser(responce.data)
            setUser(responce.data)

        }

        const onResetUser=()=>{
            setUser(originalUser)
               
        }

        return <Component {...props} user={user} onChangeUser={onChangeUser}
         onSaveUser={onSaveUser} onResetUser={onResetUser} />
    }
} 