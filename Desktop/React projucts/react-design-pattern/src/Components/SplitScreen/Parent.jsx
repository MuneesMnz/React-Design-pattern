import React from 'react'
import { Child } from './Child'



const LeftSide=()=>{
    return <h1 style={{backgroundColor:"blue"}}>LeftSide</h1>
  }
  const RightSide=()=>{
    return <h1 style={{backgroundColor:"red"}}>RightSide</h1>
  }
export const Parent = () => {
  return (
    
        // <Child  left={LeftSide} right={RightSide} LeftWeight={1} RightWeight={3} />
    <Child LeftWeight={1} RightWeight={3}>
      <LeftSide/>
      <RightSide/>
    </Child >
    
  )
}
