import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

import { getPokemons, clearPokemon } from "../../redux/actions";
import style from "./Home.module.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemon);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(12);

  const lastPokeIndex = pokePerPage * currentPage;
  const firstPokeIndex = lastPokeIndex - pokePerPage;

  let pokeInPage = pokemon.slice(firstPokeIndex, lastPokeIndex);

  const setPageValue = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const setSearchValue = (param) => {
    setSearch(param);
  };

  useEffect(() => {
    setLoading(true);
    const getPoke = async () => {
      dispatch(getPokemons()).then((data) => setLoading(false));
    };
    getPoke();

    return () => {
      dispatch(clearPokemon());
    };
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={style.homeContainer}>
      <NavBar setSearchValue={setSearchValue} />
      <div className={style.cardContainer}>
        <Pagination
          allPoke={pokemon}
          setPageValue={setPageValue}
          pokePerPage={pokePerPage}
          currentPage={currentPage}
        />
        {pokeInPage.map((poke) => (
          <Card key={poke.id} poke={poke} />
        ))}
      </div>
    </div>
  );
};

export default Home;
