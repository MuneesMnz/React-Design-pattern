import React from 'react'

const isObject=x=>typeof x ==='object' && x !==null

export const RecursiveComponents = ({data}) => {

    if(!isObject(data)){

  return (
    <li>
        {data}
    </li>
  )
    }

    const paris=Object.entries(data);

    return(
        <>
        {paris.map(([key,value])=>(
            <li>
                {key}:
                <ul>
                    <RecursiveComponents data={value} />
                </ul>
            </li>
        ))}
        </>
    )
}
