import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemon, getPokemons } from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = ({ setPageValue }) => {
  const [pokemon, setPokemon] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const filteredPokemons = useSelector((state) => state.filteredPokemons);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchValue) {
      // dispatch(getPokemon(searchValue)).then(() => {
      // });
      navigate(`/pokemons/?search=${searchValue}`);
      setPageValue(1);
    } else {
      navigate(`/pokemons`);
      setPageValue(1);
      // dispatch(getPokemons());
    }
  };

  const handleDynamicSearch = (e) => {
    const searchPokemons = filteredPokemons.filter((poke) =>
      poke.name.includes(e.target.value.toLowerCase())
    );
  };

  return (
    <>
      <div className={style.container}>
        <input
          className={style.searchBar}
          onKeyUp={(e) => setSearchValue(e.target.value)}
          id="searchInput"
          name="searchInput"
          placeholder="Name..."
          type="text"
          onChange={handleDynamicSearch}
        />
        <button className={style.searchButton} onClick={() => handleSearch()}>
          SEARCH
        </button>
      </div>
    </>
  );
};

export default SearchBar;
