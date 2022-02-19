import "./App.css";
import LeftSide from "./Components/LeftSide";
import RightSide from "./Components/RightSide";


function App() {

  return (
    <div className="App">
      <div className="row py-3">
        <div className="col-6">
          <LeftSide />
        </div>
        <div className="col-6">
          <RightSide />
        </div>
      </div>
      
    </div>
  );
}

export default App;
