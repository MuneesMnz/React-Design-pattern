// import { Parent } from "./Components/ListItem/Parent";

// import { ControlledForm } from "./Components/Controlled/ControlledForm";
// import { UncontrolledForm } from "./Components/Uncontrolled/UncontrolledForm";
// import { useState } from "react";
// import { ControlledModal } from "./Components/Controlled/ControlledModel";
// import { SmallPeopleLIstItem } from "./Components/ListItem/People/SmallPeopleLIstItem";
// import { UncontrolledModal } from "./Components/Uncontrolled/UncontrolledModal";
import { useState } from "react";
import { ControlledOnboardingFlow } from "./Components/Controlled/ControlledOnboardingFlow";
// import { UnControlledOnboardingFlow } from "./Components/Uncontrolled/UnControlledOnboardingFlow";

// import { Parent } from "./Components/MOdal/Parent";

// import { Parent } from './Components/SplitScreen/Parent';

// const person=  {
//     name:"Ali",
//     age:28,
//     hairColor:"Brown",
//     hobbies:['Cricket','Reading','Singing']
//   }

const StepOne=({goToNext})=>{
return (
  <>
  <h1>Step 1</h1>
  <button onClick={()=>goToNext({name:"MNZ"})} >Next</button>
  </>
)
}

const StepTwo=({goToNext})=>{
  return (
    <>
    <h1>Step 2</h1>
    <button onClick={()=>goToNext({age:23})} >Next</button>
    </>
  )
  }

const StepThree=({goToNext})=>{
    return (
      <>
     <h1>Step 3</h1>
      <button onClick={()=>goToNext({hairColor:"Black"})} >Next</button>
      </>
    )
    }  


function App() {
  // Controlled Model State And Functions

  // const [shouldShow,setShouldShow]=useState(false)

  // const onRequestClose=()=>{
  //   setShouldShow(false)
  // }

  const [onBoardingData, setOnBoardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const onNext=stepData=>{
   setOnBoardingData({...onBoardingData,...stepData})
   setCurrentIndex(currentIndex + 1)
   console.log(onBoardingData);
}
  
  return (
    //Split Screen 
    // <Parent/>

    //List Item
    // <Parent/>

    // Modal 
    // <Parent />

    // Uncontrolled Form 
    // <UncontrolledForm />

    // Controlled Form 
    // <ControlledForm />

    // Uncontrolled Modal
  //  <div style={{display:"flex" ,gap:"200px"}}>
  //       {/* Uncontrolled Modal */}
  //       <UncontrolledModal >
  //         <SmallPeopleLIstItem person={person} />
  //       </UncontrolledModal>

  //       {/* Controlled Modal */}
  //       <ControlledModal shouldShow={shouldShow} onRequsetClose={onRequestClose} >
  //         <SmallPeopleLIstItem person={person} />
  //       </ControlledModal>
  //       <button onClick={()=>setShouldShow(!shouldShow)}>Appjs Model open button</button>

  //  </div>

  <div>

    {/* Uncontrolled OnBoarding Flow  */}

    {/* <UnControlledOnboardingFlow onFinish={data=>{
      console.log(data)
      alert('OnBoarding Finish')
    }}>
      <StepOne />
      <StepTwo/>
      <StepThree />
    </UnControlledOnboardingFlow> */}

    {/* Controlled OnBoarding Flow  */}

    <ControlledOnboardingFlow onFinish={data=>{
      console.log(data)
      alert('OnBoarding Finish')
    }} onNext={onNext} currentIndex={currentIndex}>
      <StepOne />
      <StepTwo/>
      <StepThree />
    </ControlledOnboardingFlow>
  </div>


  );
}

export default App;
