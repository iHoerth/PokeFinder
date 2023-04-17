import { useState } from "react";
import Detail from "../Detail/Detail";
import { toTitleCase } from "../../helpers/helpers";

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
        className="card-container"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <div
          className="card"
          // onClick={showDetail}
          style={{ cursor: "pointer" }}
        >
          <div className="card-typeImg">
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
          <div style={{fontSize:'24px'}}>{toTitleCase(poke.name)}</div>
            <img
              src={poke.img}
              alt=""
              style={{maxWidth:'60%'}}
            />
        </div>
      </div>

      {/* {openDetail ? (
        <>
          <div className="backgroundModal" onClick={() => showDetail()} />
          <Detail showDetail={showDetail} poke={poke} />
        </>
      ) : null} */}
    </>
  );
};

export default Card;
