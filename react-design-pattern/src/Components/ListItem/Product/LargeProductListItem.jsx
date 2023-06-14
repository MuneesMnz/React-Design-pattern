import React from 'react'

export const LargeProductListItem = ({product,number}) => {
    const {name,price,discription,rating}=product
  return (
    <>
    <h3>
      {number && number}  {name}
    </h3>
    <p>price : {price}</p>
    <p>Discription : {discription}</p>
    <h5>{rating}</h5>
    </>
  )
}
