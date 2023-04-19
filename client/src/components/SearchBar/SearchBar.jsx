import React from "react";
import style from './SearchBar.module.css'

const SearchBar = ({setSearchValue}) => {
  return (
    <>
      <input
        className={style.searchBar}
        onKeyUp={(event) => setSearchValue(event.target.value)}
        id="searchInput"
        name="searchInput"
        placeholder="SEARCH POKEMON"
        type="text"
      />
    </>
  );
};

export default SearchBar;
