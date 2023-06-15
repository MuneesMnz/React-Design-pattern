// import { Parent } from "./Components/ListItem/Parent";

// import { ControlledForm } from "./Components/Controlled/ControlledForm";
// import { UncontrolledForm } from "./Components/Uncontrolled/UncontrolledForm";
import { useState } from "react";
import { ControlledModal } from "./Components/Controlled/ControlledModel";
import { SmallPeopleLIstItem } from "./Components/ListItem/People/SmallPeopleLIstItem";
import { UncontrolledModal } from "./Components/Uncontrolled/UncontrolledModal";

// import { Parent } from "./Components/MOdal/Parent";

// import { Parent } from './Components/SplitScreen/Parent';

const person=  {
    name:"Ali",
    age:28,
    hairColor:"Brown",
    hobbies:['Cricket','Reading','Singing']
  }

function App() {

  const [shouldShow,setShouldShow]=useState(false)

  const onRequestClose=()=>{
    setShouldShow(false)
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
   <div style={{display:"flex" ,gap:"200px"}}>
        {/* Uncontrolled Modal */}
        <UncontrolledModal >
          <SmallPeopleLIstItem person={person} />
        </UncontrolledModal>

        {/* Controlled Modal */}
        <ControlledModal shouldShow={shouldShow} onRequsetClose={onRequestClose} >
          <SmallPeopleLIstItem person={person} />
        </ControlledModal>
        <button onClick={()=>setShouldShow(!shouldShow)}>Appjs Model open button</button>

   </div>


  );
}

export default App;
