import React from "react";
import Gauge from "./gauge/gauge";
import Bar from "./bar/barComp";
import DataList from "./data-list";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header" />
      <div className="app-body">
        <div className="row">
          <div className="app-panel__left">
            <Gauge name="Current" value={49} />
          </div>
          <div className="app-panel__right">
            <Bar />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <Gauge name="Last 30 days" value={62} />
          </div>
          <div className="col-7">
            <DataList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
