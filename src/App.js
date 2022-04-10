import "./App.css";
import LeftSide from "./Components/LeftSide";
import ProcesoDeContacto from "./Components/ProcesoDeContacto";
import RightSide from "./Components/RightSide";

import Teams from "./Components/Teams";

function App() {
  return (
    <div className="App">
      <div className="row py-3">
        <h1 className="pb-2" style={{ color: "dodgerblue" }}>Email</h1>
        <div className="col-6">
          <LeftSide />
        </div>
        <div className="col-6">
          <RightSide />
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-6 izquierda">
          <ProcesoDeContacto />
        </div>
        <div className="col-6 derecha">
          <Teams />
        </div>
      </div>
    </div>
  );
}

export default App;
