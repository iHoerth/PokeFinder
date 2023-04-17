import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

import ItemList from "./ItemList";
import { fetchAll } from "../../helpers/helpers";

const Home = ({ search }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { type } = useParams();

  useEffect(() => {
    const getPoke = async () => {
      setLoading(true);
      const pokeList = (await axios(`http://localhost:3001/pokemons`)).data;
      // axios(`http://localhost:3001/pokemons`).then((response) => console.log(response.data));
      setPokemons(pokeList);
      setLoading(false);
      console.log(await pokeList);
    };
    console.log(pokemons);
    getPoke();
  }, []);

  // const filteredPoke = pokemons.filter(
  //   (poke) =>
  //     poke.name.toLowerCase().includes(search.toLowerCase()) ||
  //     poke.id == search
  // );

  if (loading) {
    return (
      <div id="itemContainerWrapper">
        <div id="itemContainer" style={{ justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ fontSize: "22px" }}>SEARCHING FOR POKEMON...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="itemContainerWrapper">
      <div id="itemContainer">
        <ItemList pokemons={pokemons} />
      </div>
    </div>
  );
};

export default Home;
