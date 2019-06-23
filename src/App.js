import React from "react";
import Gauge from "./gauge/gauge";
import OEEBar from "./bar/oeeBar";
import DownBar from "./bar/downBar";
import DataList from "./data-list";
import { oeeData, yearLabels, downData, downLabels } from "./mockData";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <div className="page-title">Line 1 - Mattec Data</div>
      </header>
      <div className="app-body">
        <div className="app-data-row">
          <DataList />
        </div>
        <div className="app-left-column">
          <Gauge name="Current" value={49} />
        </div>
        <div className="app-right-column">
          <DownBar data={downData} labels={downLabels} />
        </div>

        <div className="app-left-column">
          <Gauge name="Last 30 days" value={62} />
        </div>
        <div className="app-right-column">
          {oeeData ? <OEEBar data={oeeData} labels={yearLabels} /> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
