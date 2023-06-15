import axios from "axios";
import { useState } from "react";
import { useCurrentUser } from "./useCurrentUser"
import { useDataSource } from "./useDataSource";
import { useResourceUrl } from "./useResourceUrl";
import { useUser } from "./useUser";

export const UserInfo = () => {

    const [userId,setUserId]=useState(1)
    const resource=useResourceUrl('https://jsonplaceholder.typicode.com/users')
    const user=useUser(userId)

    const dataSource=useDataSource(async()=>{
       const responce=await axios.get('https://jsonplaceholder.typicode.com/comments')
       return responce.data
    })

    console.log('User',user);
    console.log('Resource', resource);
    console.log('Data Source', dataSource);

    // const {name,age,hairColor,hobbies}=user || {}
    
  return user? (
    <>

    <h1>{user.title}</h1>


    {/* <h3> {name}</h3>
    <p>Age:{age}</p>
    <p>Hair Color :{hairColor}</p>
    <h4>Hobbies :</h4>
    <ul>
        {hobbies.map((value,index)=>{
            return(
                <li key={index}>
                    {value}
                </li>
            )
        })}
    </ul> */}
    <button onClick={()=>setUserId(prev=>prev+1)}>change user</button>
    </>
  ):<p>Loading...</p>
}
