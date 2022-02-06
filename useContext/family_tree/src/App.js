import React, { createContext } from "react";
import Son from "./components/Son";

export const FamilyNameContext = createContext();

function App({familyName}) {
  return (
    <div>
      <FamilyNameContext.Provider value={familyName}>
        <Son/> 
      </FamilyNameContext.Provider>
    </div>
  );
}
App.defaultProps = {
  familyName : "Jackson"
}
export default App;
