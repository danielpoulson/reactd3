import React from "react";
import classes from "./data-list.module.css";

export default function DataCard({ title, data }) {
  let items = [];
  if (data !== undefined) {
    console.log(data);
    items = data.map((d, i) => (
      <div key={i}>
        <span>{d.name} : </span>
        <span className="float-right">{d.value}</span>
      </div>
    ));
  }
  return (
    <div className={`flex-fill ${classes.datacard}`}>
      <div className={classes.cardtitle}>{title}</div>
      <div className="card-body">{items}</div>
    </div>
  );
}
