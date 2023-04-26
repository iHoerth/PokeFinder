import style from "./StatsBox.module.css";

export const StatsBox = ({ stats }) => {
  return (
    <div className={style.statsContainer} style={{ flexDirection: "column", gap: "2px" }}>
      <div>
        <h3 className={style.title}>Stats (1 - 255)</h3>
      </div>
      <div className={style.box}>
        {Object.keys(stats).map((key) => (
          <div key={key} className={style.item}>
            <div className={style.name}>{key.toUpperCase()}</div>
            <div className={style.bar} style={{ background: `var(--${key}Background)` }}>
              <div
                className={style.value}
                style={{
                  width: `${(stats[key] / 255) * 100}%`,
                  background: `var(--${key})`,
                  border: `var(--${key}Border)`,
                }}
              >
                {stats[key]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
