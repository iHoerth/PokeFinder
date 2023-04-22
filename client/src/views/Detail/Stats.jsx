import React from "react";
import StatRow from "./StatRow";
import { Container, Content } from "./styledComponents";
import style from "./Stats.module.css";
import { toTitleCase } from "../../helpers/helpers";
import StatsBox from "./StatsBox";

export const Stats = ({ pokemon }) => {
  return (
    <div className={style.statsContainer} style={{ flexDirection: "column", gap: "2px" }}>
      <div>
        <h3 className={style.title}>Stat</h3>
      </div>
      <StatsBox stats={pokemon.stats}/>
      {/* {pokemon.stats.map((stat) => (
        <StatRow stat={stat} />
      ))} */}
      {/* <table>
        <tbody>
          <tr>
            <th colSpan={2} rowSpan={2}>
              STAT
            </th>
          </tr>
          {pokemon.stats.map((stat) => (
            <tr>
              <th style={{display:'flex'}}>
                <div>{stat.name}</div>
                <div>{stat.value}</div>
              </th>
              <td style={{ width: "255px", border: "1px solid black" }}>
                <div style={{ width: `calc(100 % - ${stat.value} / 255)`, backgroundColor:'yellow' }}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};
