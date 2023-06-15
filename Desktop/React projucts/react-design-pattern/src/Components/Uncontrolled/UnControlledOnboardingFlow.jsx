import React, { useState } from 'react'

export const UnControlledOnboardingFlow = ({children,onFinish}) => {
    const [onBoardingData, setOnBoardingData] = useState({})
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const goToNext=stepData=>{
        const nextIndex=CurrentIndex + 1

        const updatedData={
            ...onBoardingData,
            ...stepData
        }

        console.log(updatedData);

        if(nextIndex<children.length){
            setCurrentIndex(nextIndex)

        }else{
            onFinish(updatedData)
        }
        
        setOnBoardingData(updatedData)

    }

    const currentChild=React.Children.toArray(children)[CurrentIndex];

  if (React.isValidElement(currentChild)){
    return React.cloneElement(currentChild,{goToNext})
  }

  return currentChild
}
