import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const withUser=(Component,userId)=>{
    return (props)=>{
        const [user,setUser]=useState(null)
        useEffect(()=>{
            (async()=>{
                const responce=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                setUser(responce.data)
            })();
        },[])
        return <Component {...props}  user={user} />
    }
}