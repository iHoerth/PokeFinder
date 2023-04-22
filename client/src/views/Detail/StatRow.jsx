import React from "react";
import { toTitleCase } from "../../helpers/helpers";
import style from "./Stats.module.css";

const StatRow = ({ stat }) => {
  return (
    <div style={{ display: "flex", gap:'2px' }}>
      <div className={style.statsRow}>
        <div>{toTitleCase(stat.name)}</div>
        <div>{stat.value}</div>
      </div>
      <div className={style.statBar}></div>
    </div>
  );
};

export default StatRow;


