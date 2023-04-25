import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";

import { StatsBox } from "../../components/StatsBox/StatsBox";
import style from "./Detail.module.css";

import { toTitleCase } from "../../helpers/helpers";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [idSetter, setIdSetter] = useState(0);
  const [loading, setLoading] = useState(true);

  const detail = useSelector((state) => state.detail);
  const navigate = useNavigate();

  const handleNext = () => {
    if (Number(id) >= 151) return;
    setIdSetter(idSetter + 1);
    navigate(`/pokemons/detail/${Number(id) + 1}`);
  };

  const handlePrev = () => {
    if (Number(id) <= 1) return;
    setIdSetter(idSetter - 1);
    navigate(`/pokemons/detail/${idSetter}`);
  };

  useEffect(() => {
    setIdSetter(Number(id))
    if (Object.keys(detail).length) {
      console.log('MOUNTED')
      setPokemon(detail);
      setLoading(false);
      console.log(detail);
    } else {
      const parsedid = toTitleCase(id);
      navigate(`/pokemons/detail/${toTitleCase(id)}`);
      axios(`http://localhost:3001/pokemons/${parsedid}`).then((res) => {
        setPokemon(res.data);
        setLoading(false);
        console.log(res.data);
      });
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Link to={"/pokemons"}>
        <button className={style.btnBack}>Back</button>
      </Link>
      <button className={style.btnBack} onClick={handlePrev}>
        PREVIOUS
      </button>
      <button className={style.btnBack} onClick={handleNext}>
        NEXT
      </button>
      <div className={style.container} style={{ backgroundColor: `var(--${pokemon.types[0]}Bg)` }}>
        <div
          className={style.cardDetail}
          style={{ backgroundColor: `var(--${pokemon.types[0]}Bg)` }}
        >
          <div className={style.section} style={{ backgroundColor: `var(--${pokemon.types[0]})` }}>
            <div className={style.content} style={{ fontSize: "48px" }}>
              {pokemon.name}
            </div>
            <div className={style.content} style={{ flex: "0.2" }}>
              #{pokemon.id}
            </div>
          </div>

          <div>
            <div className={style.content}>
              <img src={pokemon.img} alt="" />
            </div>
          </div>

          <div className={style.section} style={{ backgroundColor: `var(--${pokemon.types[0]})` }}>
            <div className={style.title}>TYPES</div>
            <div className={style.content}>
              <div style={{ display: "flex", gap: "32px", padding: "5px" }}>
                {pokemon.types.map((type) => (
                  <div className={style.type} style={{ backgroundColor: `${type}` }}>
                    {toTitleCase(type)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "4px" }}>
            <div
              className={style.section}
              style={{ backgroundColor: `var(--${pokemon.types[0]})` }}
            >
              <div className={style.title}>Weight</div>
              <div className={style.content}>{pokemon.weight} kg</div>
            </div>

            <div
              className={style.section}
              style={{ backgroundColor: `var(--${pokemon.types[0]})` }}
            >
              <div className={style.title}>Height</div>
              <div className={style.content}>{pokemon.height} m</div>
            </div>
          </div>
        </div>
        <StatsBox stats={pokemon.stats} />
      </div>
    </>
  );
};

export default Detail;
