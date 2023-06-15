import React, { Children } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
// import { SmallPeopleLIstItem } from '../ListItem/People/SmallPeopleLIstItem'

const ModelBackground=styled.div`
    position:fixed;
    z-index:1;
    top:0;
    left:0;
    width:100%;
    hight:100vh;
    over-flow:auto;
    background:rgba(0,0,0,0.5)
`
const ModelBody=styled.div`
    background-color:white;
    margin:10% auto;
    padding:20px;
    width:50%;
    border-radius:10px;
`
const person=  {
    name:"Ali",
    age:28,
    hairColor:"Brown",
    hobbies:['Cricket','Reading','Singing']
  }

export const UncontrolledModal = ({children}) => {
    const [Show, setShow] = useState(false)
    return (
      <>
      <button onClick={()=>setShow(true)}>Open UnControlledModal Model</button>
      {
          Show && (
              <ModelBackground onClick={()=>setShow(false)}>
                  <ModelBody onClick={e=>e.stopPropagation()}>
                    {children}
                      <button onClick={()=>setShow(false)}>Close UncontrolledModal Modal </button>
                  </ModelBody>
              </ModelBackground>
          )
      }
      </>
    )
}
