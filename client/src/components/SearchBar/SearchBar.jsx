import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { filterPokemons, getPokemon, getPokemons } from '../../redux/actions';
import style from './SearchBar.module.css';
import { initialFilters } from '../../redux/initialFilters';

const SearchBar = ({ setPageValue }) => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  
  const selectedFilters = useSelector((state) => state.selectedFilters);
  const filteredPokemons = useSelector((state) => state.filteredPokemons);
  const pokemons = useSelector((state) => state.pokemons);

  const navigate = useNavigate();

  // const handleSearch = async () => {
  //   if (searchValue) {
  //     // dispatch(getPokemon(searchValue)).then(() => {
  //     // });
  //     navigate(`/pokemons/?search=${searchValue}`);
  //     setPageValue(1);
  //   } else {
  //     navigate(`/pokemons`);
  //     setPageValue(1);
  //     // dispatch(getPokemons());
  //   }
  // };

  const handleFilterChange = (e, filterType, value) => {

  };

  const handleSearch = (e, value) => {

  }

  const handleNewFilters = async () => {
    let newPokemons = [...pokemons];


    dispatch(filterPokemons(newPokemons));
    return newPokemons;
  };

  useEffect(() => {
    handleNewFilters();
  }, [selectedFilters]);

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
          onChange={console.log('hola')}
        />
        <button className={style.searchButton} onClick={() => handleSearch()}>
          SEARCH
        </button>
      </div>
    </>
  );
};

export default SearchBar;
