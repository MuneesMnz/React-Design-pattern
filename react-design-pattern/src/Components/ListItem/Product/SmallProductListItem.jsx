import React from 'react'

export const SmallProductListItem = ({product}) => {

    const {name,price}=product
  return (
    <div>
        Name is {name} and price is {price}rs 

    </div>
  )
}
