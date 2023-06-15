import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const ControlledForm = () => {
    const [name,setName]=useState("")
    const [age, setage] = useState("")
    const [hairColor, setHairColor] = useState("")
    const [nameError,setNameError]=useState("")

    //Using Controls Its simple And we can use Validation In it And also
    // if more than 10 input fields we can use state value as Objects    

    useEffect(() => {
      if(name.length<2){
        console.log('Name must be two or more characters');
        setNameError('Name must be two or more characters')
      }else{
        setNameError('')
      }
    
      
    }, [name])
    

    const handleSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder='Name'
        value={name} onChange={e=>setName(e.target.value)} />

        {nameError&& <p>{nameError}</p> }

        <input name="age" type="number" placeholder='age' 
        value={age} onChange={e=>setage(e.target.value)} />

        <input name="haircolor" type="text" placeholder='Hair Color' 
        value={hairColor} onChange={e=>setHairColor(e.target.value)} />
        
        <button  >Submit</button>
    </form>
  )
}
