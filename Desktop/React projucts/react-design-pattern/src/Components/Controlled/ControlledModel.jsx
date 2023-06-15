import React from 'react'

import styled from 'styled-components'

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

export const ControlledModal = ({shouldShow,onRequsetClose,children}) => {

    //using controlled modal we can use Its buttonfrom outside and close function call also out side 
    //So we can use simple modal from this 

    return shouldShow ?(
              <ModelBackground onClick={()=>onRequsetClose()}>
                  <ModelBody onClick={e=>e.stopPropagation()}>
                    {children}
                      <button onClick={onRequsetClose}>Close controlled Modal </button>
                  </ModelBody>
              </ModelBackground>
          ):null;
      

    
}