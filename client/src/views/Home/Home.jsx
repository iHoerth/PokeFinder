import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";


import { getPokemon, clearPokemon } from "../../redux/actions";
import style from "./Home.module.css";
import { v4 } from "uuid";

const Home = ({ poke }) => {
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  const [search, setSearch] = useState("");

  const setSearchValue = (param) => {
    setSearch(param);
  };


  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);


  useEffect(() => {
    if (name) {
    }

    if (!pokemon) {
      setLoading(true);
    }
    const getPoke = async () => {
      dispatch(getPokemon());
      setLoading(false);
    };
    getPoke();

    return () => {
      dispatch(clearPokemon());
    };
  }, [dispatch]);

  if (loading) {
    return (
      <div className={style.container} style={{ justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "50px" }}>SEARCHING FOR POKEMON...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={style.homeContainer}>
      <NavBar setSearchValue={setSearchValue} />
      <div className={style.cardContainer}>
        {pokemon.map((poke) => (
          <Card key={v4()} poke={poke} />
        ))}
      </div>
    </div>
  );
};

export default Home;
