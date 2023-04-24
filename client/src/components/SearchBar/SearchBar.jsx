import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getPokemon, getPokemons } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchValue) {
      dispatch(await getPokemon(searchValue));
      navigate(`/pokemons?name=${searchValue}`);
    } else {
      navigate(`/pokemons`);
      dispatch(getPokemons());
    }
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
        />
        <button className={style.searchButton} onClick={() => handleSearch()}>
          SEARCH
        </button>
      </div>
    </>
  );
};

export default SearchBar;
