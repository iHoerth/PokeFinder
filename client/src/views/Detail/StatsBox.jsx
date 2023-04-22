import React from "react";
import "./StatsBox.css";

const StatsBox = ({ stats }) => {
  return (
    <div className="stats-box">
      {stats.map((stat) => (
        <div key={stat.name} className="stat-item">
          <div className="stat-name">{stat.name.toUpperCase()}</div>
          <div className="stat-bar">
            <div
              className="stat-value"
              style={{ width: `${(stat.value / 255) * 100}%` }}
            >
              {stat.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;