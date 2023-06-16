import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";

import { getDetail, clearDetail } from "../../redux/actions";

import { StatsBox } from "../../components/StatsBox/StatsBox";
import style from "./Detail.module.css";

import { toTitleCase } from "../../helpers/helpers";

const Detail = () => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useState(id);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.detail);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentId >= 151) {
    } else {
      dispatch(getDetail(currentId)).then(() => {
        setCurrentId(Number(currentId) + 1);
        navigate(`/pokemons/detail/${Number(id) + 1}`);
      });
    }
  };

  const handlePrev = () => {
    if (currentId <= 1) {
    } else {
      dispatch(getDetail(currentId)).then(() => {
        setCurrentId(Number(currentId) - 1);
        navigate(`/pokemons/detail/${Number(id) - 1}`);
      });
    }
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getDetail(currentId)).then((res) => {
      setLoading(false);
    });
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, currentId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <div className={style.wrapper}>
        <div className={style.buttonContainer}>
          <button className={style.btnBack} onClick={() => navigate(`/pokemons`)}>
            Back
          </button>
          {pokemon.source === "api" && (
            <>
              <button className={style.btnBack} onClick={() => handlePrev()}>
                PREV
              </button>
              <button className={style.btnBack} onClick={() => handleNext()}>
                NEXT
              </button>
            </>
          )}
        </div>
        <div
          className={style.container}
          style={{ backgroundColor: `var(--${pokemon && pokemon.types && pokemon.types[0]}Bg)` }}
        >
          <div
            className={style.cardDetail}
            style={{ backgroundColor: `var(--${pokemon && pokemon.types && pokemon.types[0]}Bg)` }}
          >
            <div
              className={style.section}
              style={{ backgroundColor: `var(--${pokemon && pokemon.types && pokemon.types[0]})` }}
            >
              <div className={style.content} style={{ fontSize: "32px" }}>
                {pokemon.name}
              </div>
              <div className={style.content} style={{ flex: "0.2" }}>
                #{pokemon.id}
              </div>
            </div>

            <div className={style.content}>
              <img className={style.pokeImg} src={pokemon.img} alt="" />
            </div>

            <div
              className={style.section}
              style={{ backgroundColor: `var(--${pokemon && pokemon.types && pokemon.types[0]})` }}
            >
              <div className={style.title}>TYPES</div>
              <div className={style.content}>
                <div style={{ display: "flex", gap: "32px", padding: "5px" }}>
                  {pokemon &&
                    pokemon.types &&
                    pokemon.types.map((type) => (
                      <div key={type} className={style.type} style={{ backgroundColor: `${type}` }}>
                        {toTitleCase(type)}
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "4px" }}>
              <div
                className={style.section}
                style={{
                  backgroundColor: `var(--${pokemon && pokemon.types && pokemon.types[0]})`,
                }}
              >
                <div className={style.title}>Weight</div>
                <div className={style.content}>{pokemon.weight} kg</div>
              </div>

              <div
                className={style.section}
                style={{
                  backgroundColor: `var(--${pokemon && pokemon.types && pokemon.types[0]})`,
                }}
              >
                <div className={style.title}>Height</div>
                <div className={style.content}>{pokemon.height} m</div>
              </div>
            </div>
          </div>
          {pokemon && pokemon.stats && <StatsBox stats={pokemon.stats} />}
        </div>
      </div>
    </>
  );
};

export default Detail;
