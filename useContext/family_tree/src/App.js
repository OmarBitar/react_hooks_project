import Son from "./components/Son";

function App(props) {
  return (
    <div>
      Family Tree
      <br/>
      Mike {props.familyName} is the Grand Father
      <Son/> is the son
    </div>
  );
}
App.defaultProps = {
  familyName : "Jacksons"
}
export default App;
