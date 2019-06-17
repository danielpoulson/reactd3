import React from "react";
import Bar from "./bar";
import { managerData, yearLabels, leandata } from "../mockData";

const BarComp = () => {
  //   const [data, setData] = useState([]);
  //   const [labels, setLabels] = useState([]);
  //   setData(managerData);
  //   setLabels(yearLabels);

  return (
    <div className="container-bar">
      <Bar data={managerData} labels={yearLabels} />
    </div>
  );
};

export default BarComp;
