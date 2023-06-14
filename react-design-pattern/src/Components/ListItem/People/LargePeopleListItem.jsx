import React from 'react'

export const LargePeopleListItem = ({person,number}) => {
    const {name,age,hairColor,hobbies}=person
  return (
    <>
    <h3> {number && number} {name}</h3>
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
    </ul>
    </>
  )
}
