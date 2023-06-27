import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortPokemons, filterPokemons, clearFilter } from '../../redux/actions';

import style from './SearchBar.module.css';

const SearchBar = ({ setPageValue }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e, value) => {};

  useEffect(() => {
    dispatch(filterPokemons({ name: [searchValue, true] }));
  }, [searchValue]);

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
        />
        <button className={style.searchButton} onClick={() => handleSearch()}>
          SEARCH
        </button>
      </div>
    </>
  );
};

export default SearchBar;
