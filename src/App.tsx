import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Coba001UseState from "./Components/001UseState/Coba001UseState";
import Coba002UseEffect from "./Components/002UseEffect/Coba002UseEffect";
import Coba003UseEffectCallApi from "./Components/003UseEffectCallApi/Coba003UseEffectCallApi";
import Coba004UseRef from "./Components/004UseRef/Coba004UseRef";
import Coba005UseMemo from "./Components/005UseMemo/Coba005UseMemo";
import Coba006UseCallback from "./Components/006UseCallback/Coba006UseCallback";
import Coba007UseContext from "./Components/007UseContextAndUseReducer/Coba007UseContextAndUseReducer";
import Coba008UseLayoutEffect from "./Components/008UseLayoutEffect/Coba008UseLayoutEffect";
import Coba009UseImpetiveHandle from "./Components/009UseImperativeHandle/Coba009UseImperativeHandle";
import Coba010AsyncActions from "./Components/010AsyncActions/Coba010AsyncActions";

function App() {
  return (
    <div className="App">
      {/* <Coba001UseState /> */}
      {/* <Coba002UseEffect /> */}
      {/* <Coba003UseEffectCallApi /> */}
      {/* <Coba004UseRef /> */}
      {/* <Coba005UseMemo /> */}
      {/* <Coba006UseCallback /> */}
      {/* <Coba007UseContext /> */}
      {/* <Coba008UseLayoutEffect /> */}
      {/* <Coba009UseImpetiveHandle /> */}
      <Coba010AsyncActions />
    </div>
  );
}

export default App;
