import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import { toTitleCase } from "../../helpers/helpers";
import style from "./Card.module.css";

export const Card = ({ poke }) => {
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const types = poke.types || poke.Types

  const handleOnClick = () => {
    dispatch(getDetail(poke.id));
    navigate(`/pokemons/detail/${poke.id}`);
  };

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
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick()}
        style={{ cursor: "pointer" }}
      >
        <div className={style.content}>
          <div className={style.typeImg}>
            {
            types.map((type) => (
              <img
                key={`${poke.id} ${type}`}
                className={`icon ${type}`}
                src={`/Images/${type}.svg`}
                alt=""
              />
            ))
   
          }
          </div>
          <div>{`#` + poke.id}</div>
          <div style={{ fontSize: "24px" }}>{toTitleCase(poke.name)}</div>
          <img src={poke.img} alt="" className={style.pokeImg} />
        </div>
      </div>
    </>
  );
};

export default Card;
