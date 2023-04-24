import style from "./StatsBox.module.css";

export const StatsBox = ({ stats }) => {
  return (
    <div className={style.statsContainer} style={{ flexDirection: "column", gap: "2px" }}>
      <div>
        <h3 className={style.title}>Stat</h3>
      </div>
      <div className={style.box}>
        {stats.map((stat) => (
          <div key={stat.name} className={style.item}>
            <div className={style.name}>{stat.name.toUpperCase()}</div>
            <div className={style.bar}>
              <div className={style.value} style={{ width: `${(stat.value / 255) * 100}%` }}>
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
