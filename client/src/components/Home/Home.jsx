import { useEffect, useState } from "react";
import axios from "axios";
import CardContainer from "../CardContainer/CardContainer";
import style from "./Home.module.css";

const Home = ({ search }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPoke = async () => {
      setLoading(true);
      const pokeList = (await axios(`http://localhost:3001/pokemons`)).data;
      setPokemons(pokeList);
      setLoading(false);
      console.log(await pokeList);
    };
    console.log(pokemons);
    getPoke();
  }, []);

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
    <>
      <CardContainer pokemons={pokemons} />
    </>
  );
};

export default Home;
