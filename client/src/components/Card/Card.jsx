import { useState } from "react";
import { toTitleCase } from "../../helpers/helpers";
import style from "./Card.module.css";

export const Card = ({ poke }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div
        className={style.container}
        style={{border: '3px solid black'}}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div className={style.content} style={{ cursor: "pointer" }}>
          <div className={style.typeImg}>
            {poke.types.map((type) => (
              <img
                key={poke.id + type}
                className={"icon " + type}
                src={"/Images/" + type + ".svg"}
                alt=""
              />
            ))}
          </div>
          <div>{`#` + poke.id}</div>
          <div style={{ fontSize: "24px" }}>{toTitleCase(poke.name)}</div>
          <img src={poke.img} alt="" style={{ maxWidth: "60%" }} />
        </div>
      </div>
    </>
  );
};

export default Card;
