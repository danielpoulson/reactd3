import React from "react";
import Bar from "./oeeBar";

const BarComp = ({ data, labels, bc, bg }) => {
  //   const [data, setData] = useState([]);
  //   const [labels, setLabels] = useState([]);
  //   setData(managerData);
  //   setLabels(yearLabels);

  return (
    <div className="container-bar">
      {data ? <Bar data={data} labels={labels} bg={bg} bc={bc} /> : ""}
    </div>
  );
};

export default BarComp;
