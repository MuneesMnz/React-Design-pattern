// import { Parent } from "./Components/ListItem/Parent";

// import { ControlledForm } from "./Components/Controlled/ControlledForm";
// import { UncontrolledForm } from "./Components/Uncontrolled/UncontrolledForm";
// import { ControlledModal } from "./Components/Controlled/ControlledModel";
// import { SmallPeopleLIstItem } from "./Components/ListItem/People/SmallPeopleLIstItem";
// import { UncontrolledModal } from "./Components/Uncontrolled/UncontrolledModal";
import { useState } from "react";
import { printProps } from "./Components/HighOrderComponents/printProps";
import { UserInfoHOC } from "./Components/HighOrderComponents/UserInfo";
import { UserInfoForm } from "./Components/HighOrderComponents/UserInfoForm";
import { withUser } from "./Components/HighOrderComponents/withUser";
// import { ControlledOnboardingFlow } from "./Components/Controlled/ControlledOnboardingFlow";
// import { UserInfo } from "./Components/CustomHook/UserInfo";
// import { BigSuccessButton, DangerButton } from "./Components/Functional Programming/Composition";
// import { DangerButtonPartial, SuccessButtonPartial } from "./Components/Functional Programming/partialyApply";
// import { RecursiveComponents } from "./Components/Functional Programming/RecursiveComponents";
// import { UnControlledOnboardingFlow } from "./Components/Uncontrolled/UnControlledOnboardingFlow";

// import { Parent } from "./Components/MOdal/Parent";

// import { Parent } from './Components/SplitScreen/Parent';

// const person=  {
//     name:"Ali",
//     age:28,
//     hairColor:"Brown",
//     hobbies:['Cricket','Reading','Singing']
//   }


//OnBoarding Flow

// const StepOne=({goToNext})=>{
// return (
//   <>
//   <h1>Step 1</h1>
//   <button onClick={()=>goToNext({name:"MNZ"})} >Next</button>
//   </>
// )
// }

// const StepTwo=({goToNext})=>{
//   return (
//     <>
//     <h1>Step 2</h1>
//     <button onClick={()=>goToNext({age:23})} >Next</button>
//     </>
//   )
//   }

// const StepThree=({goToNext})=>{
//     return (
//       <>
//      <h1>Step 3</h1>
//       <button onClick={()=>goToNext({hairColor:"Black"})} >Next</button>
//       </>
//     )
//     }



    // Functional Programs 
    
    // const nestedObject={
    //   a:1,
    //   b:{
    //     b1:4,
    //     b2:{
    //       b23:"hello"
    //     },
    //     b3:{
    //       b31:{
    //         message:'Hi'
    //       },
    //       b32:{
    //         message:'Hi'
    //       }
    //     }
    //   },
    //   c:{
    //     c1:2,
    //     c2:3
    //   }
    // }



    // Higher Order Components 

    // const UserInfoWrapped=printProps(UserInfoHOC)
    const WithUserInfoWrapped=withUser(UserInfoHOC,2)

function App() {
  // Controlled Model State And Functions

  // const [shouldShow,setShouldShow]=useState(false)

  // const onRequestClose=()=>{
  //   setShouldShow(false)
  // }


  //OnBoarding Flow

//   const [onBoardingData, setOnBoardingData] = useState({})
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const onNext=stepData=>{
//    setOnBoardingData({...onBoardingData,...stepData})
//    setCurrentIndex(currentIndex + 1)
//    console.log(onBoardingData);
// }
//  return(
// <>

 
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

  // <div>

    {/* Uncontrolled OnBoarding Flow  */}

    /* <UnControlledOnboardingFlow onFinish={data=>{
      console.log(data)
      alert('OnBoarding Finish')
    }}>
      <StepOne />
      <StepTwo/>
      <StepThree />
    </UnControlledOnboardingFlow> */

    /* Controlled OnBoarding Flow  */

    {/* <ControlledOnboardingFlow onFinish={data=>{
      console.log(data)
      alert('OnBoarding Finish')
    }} onNext={onNext} currentIndex={currentIndex}>
      <StepOne />
      <StepTwo/>
      <StepThree />
    </ControlledOnboardingFlow> */}
  {/* </div> */}

  // </>
  // )
 return(
  <div>
    {/* UseCurrentUser  */}
    {/* <UserInfo /> */}

    {/* Functional Programming  */}

    {/* <RecursiveComponents data={nestedObject} />
    <DangerButton text="Don't Do it" />
    <BigSuccessButton text='here you go' />
    <div>
      <DangerButtonPartial text="partial Button" />
      <SuccessButtonPartial text="partial Button" />
    </div> */}


    {/* High Order Components  */}

    {/* <UserInfoWrapped  a={1} b="hello" c={{name:'Mnz'}} /> */}

    {/* <WithUserInfoWrapped  /> */}
    <UserInfoForm />

  </div>
 )


  
}

export default App;
