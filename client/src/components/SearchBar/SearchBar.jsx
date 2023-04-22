import { useNavigate } from "react-router-dom";
import { useState } from "react";

import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue) {
      navigate(`/pokemons/?name=${searchValue}`);
    }
  };

  return (
    <>
      <div className={style.container}>
        <input
          className={style.searchBar}
          onKeyUp={(event) => setSearchValue(event.target.value)}
          id="searchInput"
          name="searchInput"
          placeholder="POKEMON NAME"
          type="text"
        />
        <button className={style.searchButton} onClick={() => handleSearch()}>SEARCH</button>
      </div>
    </>
  );
};

export default SearchBar;
