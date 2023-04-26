import { NavLink } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";

const NavBar = ({ setPageValue }) => {
  return (
    <div className={style.NavBar}>
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/pokemons"
      >
        PokeDex
      </NavLink>
      <SearchBar setPageValue={setPageValue} />
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/create"
      >
        Create
      </NavLink>
      {/* <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/login"
      >
        Log In
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.navActive : style.navInactive)}
        to="/register"
      >
        Register
      </NavLink> */}
    </div>
  );
};

export default NavBar;
