import React from 'react'

export const SmallPeopleLIstItem = ({person}) => {
    const {name,age}=person
  return (
    <div>Name is {name} And {age} Years Old</div>
  )
}
