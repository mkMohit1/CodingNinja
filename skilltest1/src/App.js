import Dropdown from "./Components/Dropdown";
import Data from "./Data/Data";

function App() {
  // to pass perticular data to dropdown
  // console.log(Data);
  return (
    <><Dropdown data={Data[0]} /></>
  );
}

export default App;
