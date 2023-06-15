import axios from "axios"
import { useEffect, useState } from "react"


export  const useResourceUrl=(resourceUrl)=>{
    const [resource,SetResource]=useState(null)

    useEffect(()=>
    {
        (async()=>{
            const responce=await axios.get(resourceUrl)
            SetResource(responce.data)
        })()
    },[resourceUrl])

    return resource
}

