import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getPokemon, getPokemons } from "../../redux/actions";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  // Utilice dispatch en vez de pasar una funcion por props para filtrar,
  //  porque si en el fetch original yo no traigo todos los pokemons
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
          placeholder="POKEMON NAME"
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
