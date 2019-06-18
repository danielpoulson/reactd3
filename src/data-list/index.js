import React from "react";
import classes from "./data-list.module.css";

export default function DataList() {
  return (
    <div className={classes.container}>
      <div class={`card ${classes.datacard}`}>
        <div class="card-body">
          <div>
            <span>Run Time : </span>
            <span>175</span>
          </div>
          <div>
            <span>Down Time : </span>
            <span>235</span>
          </div>
          <div>
            <span>Idle Time : </span>
            <span>73</span>
          </div>
        </div>
      </div>
      <div class={`card ${classes.datacard}`}>
        <div class="card-body">
          <div>
            <span>Avail : </span>
            <span>42.3%</span>
          </div>
          <div>
            <span>Perf : </span>
            <span>37.9%</span>
          </div>
          <div>
            <span>Quality : </span>
            <span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
