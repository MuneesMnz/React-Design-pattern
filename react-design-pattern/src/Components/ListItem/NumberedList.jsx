import React from 'react'

export const NumberedList = ({items,resourceName,itemComponent:ItemContainer}) => {
  return (
    <>
    {
        items.map((item,i)=>{
            return(
                <>
                <h3>{i+1}</h3>
                <ItemContainer key={i} {...{[resourceName]:item}}  />
                </>
            )
        })
    }
    </>
  )
}
