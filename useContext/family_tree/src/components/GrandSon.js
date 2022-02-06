import { useContext } from "react";
import { FamilyNameContext } from "../App";

function GrandSon() {
    const familyName = useContext(FamilyNameContext);
    console.log(familyName)
    return (
      <div>
       sam {familyName} 
      </div>
    );
  }
  
  export default GrandSon;
  