import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Coba001UseState from "./Components/001UseState/Coba001UseState";
import Coba002UseEffect from "./Components/002UseEffect/Coba002UseEffect";
import Coba003UseEffectCallApi from "./Components/003UseEffectCallApi/Coba003UseEffectCallApi";
import Coba004UseRef from "./Components/004UseRef/Coba004UseRef";

function App() {
  return (
    <div className="App">
      {/* <Coba001UseState /> */}
      {/* <Coba002UseEffect /> */}
      {/* <Coba003UseEffectCallApi /> */}
      <Coba004UseRef />
    </div>
  );
}

export default App;
