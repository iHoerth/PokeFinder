import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import Card from '../../components/Card/Card';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';

import { getPokemons, clearPokemon, getPokemon } from '../../redux/actions';
import style from './Home.module.css';
import Filter from '../../components/Filter/Filter';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const search = searchParams.get('search');

  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(12);

  // const lastPokeIndex = pokePerPage * currentPage;
  // const firstPokeIndex = lastPokeIndex - pokePerPage;

  // let pokeInPage = filteredPokemons.slice(firstPokeIndex, lastPokeIndex);

  const setPageValue = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setLoading(true);
    if (search) {
      dispatch(getPokemon(search)).then((res) => {
        setLoading(false);
      });
    } else {
      dispatch(getPokemons()).then((data) => setLoading(false));
    }
  }, [dispatch, search]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar setPageValue={setPageValue} />
      <div className={style.homeContainer}>
        <>
          <Filter pokemons={pokemons} />
          <div className={style.cardContainer}>
            {filteredPokemons.map((poke) => (
              <Card key={poke.id} poke={poke} />
            ))}
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default Home;
