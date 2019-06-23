import React from "react";
import DataCard from "./data-card";
import classes from "./data-list.module.css";

export default function DataList() {
  const timeData = [
    { name: "Run Time", value: 175 },
    { name: "Down Time", value: 235 },
    { name: "Idle Time", value: 73 }
  ];
  const perfData = [
    { name: "Avail", value: 42.3 },
    { name: "Perf", value: 42.3 },
    { name: "Qual", value: 100 },
    { name: "OEE", value: 21.5 }
  ];
  const unitData = [
    { name: "Units", value: 6686 },
    { name: "Units / min", value: 14.3 }
  ];
  const downData = [
    { name: "Down (%)", value: 61.5 },
    { name: "Down None(%)", value: 44.0 }
  ];
  return (
    <div className="d-flex">
      <DataCard title="Time" data={timeData} />
      <DataCard title="Performance" data={perfData} />
      <DataCard title="Units" data={unitData} />
      <DataCard title="Down" data={downData} />
    </div>
  );
}
